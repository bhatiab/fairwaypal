#!/bin/bash
# Usage:
#   ./scripts/build-all-races.sh           — build all races
#   ./scripts/build-all-races.sh --resume  — skip already-built races

RESUME=false
if [ "$1" = "--resume" ]; then
  RESUME=true
fi

echo "Reading race list from race-config.json..."
if [ "$RESUME" = true ]; then
  echo "Mode: RESUME (skipping races with existing fact-check)"
else
  echo "Mode: FULL (building all races)"
fi

SLUGS=$(node -e "
const data = require('./docs/cowork-batches/race-config.json');
data.races.forEach(r => console.log(r.slug));
")

BUILT=0
SKIPPED=0
FAILED=0

for SLUG in $SLUGS; do
  echo "=========================================="

  FACT_CHECK="docs/fact-checks/${SLUG}-fact-check.md"
  LOG="logs/${SLUG}-build.log"

  # --resume: skip if fact-check exists
  if [ "$RESUME" = true ] && [ -f "$FACT_CHECK" ]; then
    echo "Skipping $SLUG — already built successfully"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Full mode: skip only if both fact-check AND success marker exist
  if [ "$RESUME" = false ] && [ -f "$FACT_CHECK" ] && grep -q "BUILD_SUCCESS" "$LOG" 2>/dev/null; then
    echo "Skipping $SLUG — already built successfully"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  echo "Starting: $SLUG at $(date)"
  ./scripts/build-single-race.sh $SLUG

  if [ $? -eq 0 ]; then
    BUILT=$((BUILT + 1))
  else
    FAILED=$((FAILED + 1))
  fi

  echo "Waiting 3 minutes before next race..."
  sleep 180
done

echo ""
echo "=========================================="
echo "SUMMARY"
echo "=========================================="
echo "Built:   $BUILT races"
echo "Skipped: $SKIPPED races (already complete)"
echo "Failed:  $FAILED races (check logs/)"
echo "Finished at $(date)"
