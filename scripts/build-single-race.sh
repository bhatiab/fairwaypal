#!/bin/bash
# Usage: ./scripts/build-single-race.sh spa

SLUG=$1

if [ -z "$SLUG" ]; then
  echo "Usage: ./scripts/build-single-race.sh [slug]"
  echo "Available slugs:"
  cat docs/cowork-batches/race-config.json | \
    grep '"slug"' | sed 's/.*": "//;s/".*//'
  exit 1
fi

# Extract race config for this slug
RACE_CONFIG=$(node -e "
const data = require('./docs/cowork-batches/race-config.json');
const race = data.races.find(r => r.slug === '$SLUG');
console.log(race ? JSON.stringify(race, null, 2) : 'NOT FOUND');
")

if [ "$RACE_CONFIG" = "NOT FOUND" ]; then
  echo "Error: slug '$SLUG' not found in race-config.json"
  exit 1
fi

mkdir -p logs

# Build the prompt by inserting race config
PROMPT=$(node -e "
const fs = require('fs');
const template = fs.readFileSync('docs/cowork-batches/master-build-prompt.md', 'utf8');
const data = require('./docs/cowork-batches/race-config.json');
const race = data.races.find(r => r.slug === '$SLUG');
const config = JSON.stringify(race, null, 2);
process.stdout.write(template.replace('[INSERT RACE CONFIG BLOCK HERE]', config));
")

echo "Building: $SLUG"
echo "Config: $RACE_CONFIG"
echo "Log: logs/${SLUG}-build.log"

claude --dangerously-skip-permissions \
  -p "$PROMPT" \
  > "logs/${SLUG}-build.log" 2>&1

EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "BUILD_SUCCESS: $SLUG at $(date)" >> "logs/${SLUG}-build.log"
  echo "✅ Done: $SLUG"
  echo "Fact-check: docs/fact-checks/${SLUG}-fact-check.md"
else
  echo "BUILD_FAILED: $SLUG at $(date)" >> "logs/${SLUG}-build.log"
  echo "❌ Failed: $SLUG — check logs/${SLUG}-build.log"
fi

exit $EXIT_CODE
