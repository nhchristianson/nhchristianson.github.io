#!/bin/bash
# Docker script to run Jekyll with sass-embedded fix

echo "🚀 Starting Jekyll in Docker (with sass fix)..."

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker Desktop first."
    exit 1
fi

if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker daemon is not running. Please start Docker Desktop."
    exit 1
fi

echo "🧹 Cleaning up..."
rm -rf _site .jekyll-cache .sass-cache .bundle vendor Gemfile.lock 2>/dev/null
rm -rf backup_custom_files* 2>/dev/null

echo "🐳 Starting Jekyll server with sass-embedded fix..."
echo ""

# Run with platform specification to avoid architecture issues
docker run --rm \
  --platform linux/amd64 \
  --volume="$PWD:/srv/jekyll:Z" \
  --publish 4000:4000 \
  --publish 35729:35729 \
  jekyll/jekyll:4 \
  /bin/bash -c "
    echo '📦 Installing dependencies with sass fix...' && \
    bundle config set --local path /srv/jekyll/.bundle && \
    bundle config set force_ruby_platform true && \
    bundle install && \
    echo '' && \
    echo '🏗️  Building site...' && \
    bundle exec jekyll serve --host 0.0.0.0 --livereload --config _config.yml
  "

echo "✅ Jekyll server stopped."