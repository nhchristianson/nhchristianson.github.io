# al-folio v0.14.6 Migration Summary

## Completed Migration Steps

### 1. Backed Up Custom Files
Created backup directory: `/Users/wfu/code/nhchristianson.github.io/backup_custom_files_20250531_130646/`

### 2. Copied New Template Files
- Copied all files from al-folio v0.14.6 template
- Preserved existing content (_pages, _bibliography, _news, _posts, _projects, assets/pdf, assets/img/prof_pic.jpg)

### 3. Converted Custom Includes
- ✅ `_includes/link_preview.html` → `_includes/link_preview.liquid`
- ✅ `_includes/selected_papers.html` → `_includes/selected_papers.liquid` (with custom header)

### 4. Updated Configuration
- ✅ Updated `_config.yml` with user's personal information
- ✅ Updated `_data/socials.yml` with GitHub, LinkedIn, DBLP, Google Scholar
- ✅ Updated Jekyll Scholar settings for "Christianson, Nico"

### 5. Ported Custom Layouts
- ✅ Added email obfuscation to `_layouts/about.liquid`
- ✅ Added venue button functionality to `_layouts/bib.liquid`
- ✅ Added venue button CSS to `_sass/_base.scss`
- ✅ Added link preview CSS to `assets/css/main.scss`

### 6. Updated Content Pages
- ✅ Updated `_pages/about.md` to use `.liquid` includes
- ✅ Fixed news/announcements configuration
- ✅ Removed merge conflict markers

## Key Customizations Preserved

1. **Email Obfuscation**: nchristi [at] caltech [dot] edu
2. **Venue Buttons**: Clickable badges linking to paper URLs
3. **Link Preview Cards**: Custom styled preview cards for external links
4. **Selected Papers**: Custom header with link to full list

## Next Steps

1. Install required Ruby dependencies:
   ```bash
   gem install bundler:2.6.9
   bundle install
   ```

2. Test the site locally:
   ```bash
   bundle exec jekyll serve
   ```

3. Commit the changes:
   ```bash
   git add .
   git commit -m "Migrate to al-folio v0.14.6 with custom features preserved"
   ```

## Notes
- All custom styling and functionality has been preserved
- The migration converts HTML templates to Liquid format (new standard)
- Social links now use the centralized `_data/socials.yml` file