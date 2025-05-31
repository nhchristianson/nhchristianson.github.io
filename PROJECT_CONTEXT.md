# Project Context: nhchristianson.github.io Migration

## Current Status
- **Current Branch**: al-folio-migration
- **Site Status**: Jekyll runs successfully with `bundle exec jekyll serve`
- **Migration**: Completed from older al-folio to v0.14.6

## Completed Tasks
1. ✅ Created comprehensive CLAUDE.md documentation
2. ✅ Fixed Ruby/Bundler permission issues
3. ✅ Migrated to al-folio v0.14.6 with all customizations preserved
4. ✅ Converted HTML templates to Liquid
5. ✅ Fixed vendor directory escaping issues in _config.yml
6. ✅ Set up Docker as fallback for Ruby environment issues

## Pending Tasks
1. 🔄 Fix warnings from `bundle exec jekyll serve`:
   - Sass @import deprecation warnings (low priority - requires major refactor)
   - Global built-in function deprecation in font-awesome/tabler-icons
   - ✅ ActiveSupport timezone deprecation warning (added config file)
   - ✅ Jupyter nbconvert error (disabled jekyll-jupyter-notebook plugin)
2. ✅ Verify website functionality (completed with Puppeteer)
3. 🔄 Review diffs and clean up branch:
   - Remove unnecessary Docker scripts (keep one working version)
   - Stage and commit essential changes
   - Consider reverting non-essential changes
4. 🔄 Personalize content (update "You R. Name" to actual info)

## Current Work
- Server running at: http://127.0.0.1:4000/al-folio/
- ✅ Comprehensive website testing completed:
  - [x] Homepage basic load - Working
  - [x] Research page with publications - Working
  - [x] Teaching page - Shows course listings
  - [x] CV page - Displays with sample data
  - [x] Blog functionality - Blog posts displaying
  - [x] Projects page - Has directory listing issue
  - [x] Theme switching (light/dark) - Working perfectly
  - [x] Mobile responsiveness - Responsive with hamburger menu
  - [x] Navigation links - All working
  - [x] Social media links - Icons present in footer
  - [x] Search functionality - Ctrl+K shortcut available
  - [x] Email obfuscation - Working! Shows as [at] and [dot]
  - [x] Venue buttons - All working (COLT, arXiv, SIGMETRICS, etc.)
  - [x] No broken images detected

## Issues Found
- ✅ Projects page shows directory listing - FIXED by creating _pages/projects.md
- All content shows placeholder "You R. Name" - needs personalization in _config.yml

## Tasks Completed
1. ✅ Comprehensive testing of all pages and features
2. ✅ Fixed projects page by creating missing projects.md
3. ✅ Cleaned up extra Docker scripts (kept only essential ones)
4. ✅ Created _plugins/active_support_config.rb to fix timezone warning
5. ✅ Disabled jekyll-jupyter-notebook plugin to fix missing module error

## Key Customizations Preserved
- Email obfuscation system
- Venue buttons in bibliography
- Link preview cards
- Custom about page layout
- Social media links
- Citation and BibTeX buttons
- Research/Teaching pages

## Important Files Modified
- `_config.yml` - Updated with excludes and personal info
- `_layouts/*.liquid` - Converted from HTML
- `_includes/*.liquid` - Converted from HTML
- `_data/socials.yml` - New file for social links
- `MIGRATION_SUMMARY.md` - Detailed migration notes

## Next Steps
1. Run `bundle exec jekyll serve` and capture warnings
2. Address each warning systematically
3. Test site functionality in browser
4. Clean up branch for minimal diff

## Notes
- Ruby issues solved by using vendor/bundle directory
- Docker available as backup with docker-run.sh script
- Site should maintain all original customizations