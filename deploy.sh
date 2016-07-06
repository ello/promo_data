#!/usr/bin/env bash
BUCKET=ello-staging-promos
aws s3 sync ./data s3://$BUCKET/ --exclude "*" --include "*.json"
