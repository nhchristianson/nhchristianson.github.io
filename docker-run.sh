#!/bin/bash
# Docker script to run Jekyll with proper Ruby version

echo "Running Jekyll in Docker container..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker Desktop first."
    exit 1
fi

# Clean up any existing Gemfile.lock to avoid version conflicts
if [ -f "Gemfile.lock" ]; then
    echo "Removing Gemfile.lock to avoid version conflicts..."
    rm Gemfile.lock
fi

# Clean up any vendor directories and backup directories to avoid conflicts
echo "Cleaning up vendor and backup directories..."
rm -rf vendor "?endor" endor "\vendor" .bundle 2>/dev/null
rm -rf backup_custom_files* 2>/dev/null

# Run Jekyll using the official Jekyll Docker image
# Using jekyll/jekyll:4 for better compatibility with modern gems
docker run --rm \
  --volume="$PWD:/srv/jekyll:Z" \
  -p 4000:4000 \
  -p 35729:35729 \
  jekyll/jekyll:4 \
  /bin/bash -c "rm -rf /srv/jekyll/vendor /srv/jekyll/*endor* /srv/jekyll/backup_custom_files* && bundle config set --local path /srv/jekyll/.bundle && bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload"

echo "Jekyll site should be running at http://localhost:4000"