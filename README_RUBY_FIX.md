# Ruby/Bundler Fix Instructions

This fix attempts to allow the Jekyll site to build without requiring sudo permissions.

## Setup Instructions

1. Install dependencies in a local directory:
```bash
bundle install --path vendor/bundle
```

2. Build the site:
```bash
bundle exec jekyll build
```

3. Serve the site locally:
```bash
bundle exec jekyll serve
```

## What This Fixes

- Avoids system Ruby permission issues by installing gems locally
- All dependencies are installed in `vendor/bundle` which is already in `.gitignore`
- No need for sudo or system-wide gem installations
- Added webrick gem which is required for Jekyll 3.x on Ruby 2.6+

## Current Status

✅ Dependencies install successfully without sudo
❌ Jekyll build fails due to compatibility issues:
   - nokogiri native extension loading issues with system Ruby
   - Jekyll 3.9.5 has compatibility problems with the github-pages gem

## Known Issues

1. **nokogiri LoadError**: The nokogiri gem (used by jemoji) fails to load its native extensions properly on macOS system Ruby
2. **Jekyll compatibility**: Jekyll 3.9.5 with github-pages v231 has known compatibility issues
3. **System Ruby limitations**: macOS system Ruby (2.6.10) has various compatibility issues with modern gems

## Recommended Solution

The full migration to al-folio v0.14.6 will resolve all these issues by:
- Using modern Jekyll 4.x without github-pages gem constraints
- Supporting Ruby 3.x which has better compatibility
- Using GitHub Actions for deployment instead of relying on github-pages gem

## Alternative Solutions

If you need the site working immediately before migration:
1. Install rbenv or rvm to use a newer Ruby version (3.0+)
2. Use Docker to run Jekyll in a container
3. Use GitHub Codespaces or similar cloud development environment