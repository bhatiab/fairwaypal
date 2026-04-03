#!/bin/bash
# GrandPrixPal — Single race build script
# Usage: ./scripts/build-race.sh 01-spa

RACE=$1

if [ -z "$RACE" ]; then
  echo "Usage: ./scripts/build-race.sh [batch-file-name]"
  echo "Example: ./scripts/build-race.sh 01-spa"
  exit 1
fi

BATCH_FILE="docs/cowork-batches/${RACE}.md"

if [ ! -f "$BATCH_FILE" ]; then
  echo "Error: Batch file not found: $BATCH_FILE"
  echo "Available batch files:"
  ls docs/cowork-batches/
  exit 1
fi

mkdir -p logs

echo "=========================================="
echo "Race build starting: $RACE"
echo "Time: $(date)"
echo "Log: logs/${RACE}-build.log"
echo "=========================================="

claude --dangerously-skip-permissions \
  -p "$(cat $BATCH_FILE)" \
  > "logs/${RACE}-build.log" 2>&1

EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ Completed: $RACE at $(date)"
else
  echo "❌ Failed: $RACE (exit code $EXIT_CODE)"
  echo "Check logs/${RACE}-build.log for details"
fi

exit $EXIT_CODE
