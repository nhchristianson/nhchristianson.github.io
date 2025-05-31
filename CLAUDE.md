# Nico Christianson's Academic Website - Codebase Documentation

## Overview
This is a personal academic website for Nico Christianson, a PhD candidate at Caltech. The site is built using Jekyll with a heavily customized version of the al-folio academic portfolio theme.

## Technology Stack
- **Jekyll**: Static site generator
- **al-folio theme**: Base academic portfolio theme (older version)
- **Ruby 2.6.10**: Current Ruby version (system Ruby on macOS)
- **Bundler 1.17.2**: Dependency management
- **GitHub Pages**: Hosting platform

## Current Issues
1. **Ruby/Bundler Version Conflicts**: The site is using system Ruby (2.6.10) which requires sudo permissions to install gems
2. **Outdated Dependencies**: Using an older version of al-folio theme with github-pages gem
3. **Template Migration Needed**: Owner wants to update to latest al-folio which uses Liquid templates instead of HTML

## Key Customizations from Standard al-folio

### 1. **Custom Includes**
- `link_preview.html`: Creates styled preview cards for external links (used on homepage)
- `selected_papers.html`: Shows only selected publications on homepage

### 2. **Layout Modifications**
- **about.html**: Custom email obfuscation ("nchristi [at] caltech [dot] edu")
- **bib.html**: Heavily modified bibliography layout
  - Removed standard link buttons (PDF, Abstract, etc.)
  - Custom venue button styling - entire abbreviation is clickable
  - First initial only format for authors

### 3. **Custom Styling**
- **_base.scss**: Added `.venue-button-link` styling for publication venues
- **main.scss**: Custom link preview card styles with orange color scheme
- Side-by-side responsive layouts for previews and videos

### 4. **Configuration (_config.yml)**
- Email hidden from public display
- Blog functionality disabled
- Features disabled: tooltips, darkmode, social icons in navbar
- Custom scholar name format: "Nicolas H. Christianson"
- News limit increased to 20

### 5. **Content Structure**
- **Homepage (about.md)**: Research-focused with embedded link previews
- **Research page**: Custom YouTube video embeds, publications by year
- **Teaching page**: Organized by institution with mentorship section
- **No blog**: Blog functionality completely disabled

### 6. **Bibliography Customizations**
- Custom fields in papers.bib:
  - `maxauthorlimit`: Controls author display count
  - `abbr`: Venue abbreviations
  - `selected`: Marks featured publications
- Mix of published papers and "Under review" entries

## Migration Considerations

### Must Preserve:
1. Custom link preview functionality
2. Modified bibliography layout with clickable venue buttons
3. Email obfuscation format
4. Selected papers on homepage
5. YouTube video embeds on research page
6. Teaching page structure
7. All publication data and custom fields

### Can Update:
1. Base theme structure to latest al-folio
2. Ruby/Jekyll versions
3. Build process (move away from github-pages gem)
4. Liquid template syntax

### Files with Heavy Customization:
- `_layouts/about.html`
- `_layouts/bib.html`
- `_includes/link_preview.html`
- `_includes/selected_papers.html`
- `assets/css/main.scss`
- `_sass/_base.scss`
- `_pages/research.md`
- `_pages/teaching.md`

## Recommended Migration Strategy
1. Set up proper Ruby environment (rbenv/rvm) to avoid system Ruby issues
2. Clone latest al-folio template
3. Port custom includes and layouts to Liquid syntax
4. Migrate custom SCSS/CSS
5. Update _config.yml with customizations
6. Copy over content pages and bibliography
7. Test all functionality, especially:
   - Link previews
   - Publication venue links
   - Video embeds
   - Email obfuscation

## Notes
- Site is actively maintained (recent commits in January 2025)
- Focus is on academic achievements, research papers, and teaching
- Emphasis on clean, professional presentation without extra features
- Strong integration with external platforms (YouTube, academic databases)