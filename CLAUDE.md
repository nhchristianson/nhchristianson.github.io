# nhchristianson.github.io - Codebase Documentation

## Important Reminders

- **ALWAYS update PROJECT_CONTEXT.md** when working on tasks to maintain state between sessions
- When working with bibliographies, use the venue button customization

## Project Overview

This is Nico Christianson's personal academic website built with Jekyll and the al-folio theme. The site has been migrated from an older version to al-folio v0.14.6.

## Technical Details

- **Framework**: Jekyll 3.9.5
- **Theme**: al-folio v0.14.6 (migrated from older version)
- **Ruby Issues**: System Ruby 2.6.10 has permission issues, use vendor/bundle or Docker
- **Deployment**: GitHub Actions (not Pages due to custom plugins)

## Key Customizations

### 1. Email Obfuscation
- Custom JavaScript in `_includes/scripts/misc.html`
- Protects email addresses from scrapers
- Reversible encoding for display

### 2. Venue Buttons in Bibliography
- **Location**: `_layouts/bib.liquid`
- Venue abbreviations are clickable buttons linking to papers
- Custom CSS styling for consistent appearance

### 3. Link Preview Cards
- **Location**: `_includes/link_preview.liquid`
- Generates preview cards for external links
- Shows title, description, and image

### 4. Social Media Integration
- Configured in `_data/socials.yml`
- Includes GitHub, email, and Google Scholar

### 5. Custom Pages
- Research page with publications
- Teaching page
- About page with profile

## Directory Structure

```
/
├── _bibliography/     # BibTeX files for publications
├── _data/            # Site data (socials, CV, venues)
├── _includes/        # Reusable components (Liquid templates)
├── _layouts/         # Page layouts (Liquid templates)
├── _pages/           # Main pages (about, research, teaching)
├── _posts/           # Blog posts
├── _projects/        # Project pages
├── _sass/            # SCSS stylesheets
├── assets/           # Static assets (images, CSS, JS)
├── _config.yml       # Jekyll configuration
└── Gemfile          # Ruby dependencies
```

## Important Files

- `_config.yml` - Main configuration, personal info, excludes
- `_layouts/bib.liquid` - Bibliography layout with venue buttons
- `_includes/link_preview.liquid` - Link preview card component
- `_data/socials.yml` - Social media links
- `MIGRATION_SUMMARY.md` - Detailed migration notes
- `PROJECT_CONTEXT.md` - Current project state and tasks

## Running the Site

### Option 1: Bundle (if Ruby environment is set up)
```bash
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve
```

### Option 2: Docker (recommended for Ruby issues)
```bash
./run-jekyll-fixed.sh
```

### Option 3: Python Server (for built site)
```bash
./serve-local.sh
```

## Common Issues

1. **Ruby Permission Errors**: Use vendor/bundle directory
2. **Bundler Version Mismatch**: Remove Gemfile.lock and reinstall
3. **Vendor Directory Issues**: Added to _config.yml excludes
4. **sass-embedded on ARM64**: Use Docker or GitHub Actions

## Deployment

- Push to GitHub
- GitHub Actions builds and deploys
- Custom domain: nhchristianson.github.io

## Customization Notes

When modifying the site:
1. Preserve email obfuscation functionality
2. Maintain venue button links in bibliography
3. Keep link preview cards working
4. Update PROJECT_CONTEXT.md with changes
5. Test locally before pushing

## Progress Tracking

This section tracks major work sessions, what was accomplished, and what approaches worked well.

### Session: 2025-01-31 - Production Readiness Fixes

**Objective**: Fix all remaining issues and prepare site for production deployment

**Issues Found & Fixed**:
1. ✅ **Placeholder Text**: Fixed "You R. Name" → "Nicolas Christianson" in `_config.yml`
2. ✅ **URL Configuration**: Updated to correct GitHub Pages URL (`nhchristianson.github.io`)
3. ✅ **Favicon**: Changed from emoji to proper `favicon.ico` file
4. ✅ **Jupyter Core Error**: Installed missing module with `pip3 install --user --break-system-packages jupyter_core`
5. ✅ **CV Placeholder Data**: Completely updated `assets/json/resume.json` with Nicolas's actual information
6. ✅ **Blog Template Content**: Removed external sources and template posts, disabled pagination
7. ⚠️ **Sass Warnings**: Left as-is (deprecation warnings from theme itself, non-breaking)

**What Worked Well**:
- **Puppeteer Testing**: Using Puppeteer throughout development to test changes in real-time was extremely effective
- **Systematic Approach**: Using TodoWrite to track tasks ensured nothing was missed
- **Batch Changes**: Making related changes together (name, URL, favicon) was efficient
- **JSON Resume**: Updating the JSON resume file was easier than modifying YAML CV data

**Testing Results**:
- ✅ All pages functional (about, cv, research, teaching, projects)
- ✅ Navigation working correctly
- ✅ Custom features preserved (email obfuscation, venue buttons, link previews)
- ✅ Dark mode toggle functional
- ✅ Search modal working
- ✅ No template/placeholder content visible

**Commands Used**:
```bash
# Install missing Python dependency
pip3 install --user --break-system-packages jupyter_core

# Test site functionality
bundle exec jekyll serve

# Clean up template content
mv _posts _posts_template_backup
mkdir _posts
```

**Next Steps for Future Sessions**:
- Consider adding Nicolas's own blog posts if he creates any
- Monitor for any additional placeholder content that appears
- Keep custom features tested when updating theme versions