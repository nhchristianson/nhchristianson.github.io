#!/bin/bash
# Docker script to run Jekyll with proper Ruby version

echo "Running Jekyll in Docker container..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker Desktop first."
    exit 1
fi

# Run Jekyll using the official Jekyll Docker image
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle" \
  -p 4000:4000 \
  -it jekyll/jekyll:latest \
  jekyll serve --force_polling

echo "Jekyll site is running at http://localhost:4000"