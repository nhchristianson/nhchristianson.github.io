#!/bin/bash
# Serve the Jekyll site using Python (if it's already built)

echo "🚀 Checking for built site..."

if [ -d "_site" ] && [ -f "_site/index.html" ]; then
    echo "✅ Found built site in _site directory"
    echo ""
    echo "🌐 Starting local web server..."
    echo "   Your site will be available at: http://localhost:4000"
    echo "   Press Ctrl+C to stop the server"
    echo ""
    
    # Use Python's built-in HTTP server
    cd _site && python3 -m http.server 4000
else
    echo "❌ No built site found in _site directory"
    echo ""
    echo "The site needs to be built first. The Docker build is failing due to"
    echo "sass-embedded compatibility issues on ARM64 Macs."
    echo ""
    echo "Options:"
    echo "1. Push to GitHub and let GitHub Actions build it"
    echo "2. Use GitHub Codespaces for development"
    echo "3. Install Ruby 3.x locally with rbenv (see MIGRATION_STATUS.md)"
    echo ""
    echo "For now, trying one more Docker approach..."
    echo ""
    
    # Try the official Jekyll Docker one more time with minimal config
    docker run --rm \
      -v "$PWD:/srv/jekyll" \
      -p 4000:4000 \
      -e JEKYLL_ENV=production \
      jekyll/minimal \
      jekyll serve --skip-initial-build --force_polling
fi