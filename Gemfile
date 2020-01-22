source 'https://rubygems.org'

gem 'jekyll', '>= 3.7', '< 5.0'

# Jekyll plugins
group :jekyll_plugins do
   gem 'jekyll-feed'
   gem 'jekyll-sitemap'
   gem 'jekyll-redirect-from'
   gem 'jekyll-last-modified-at'
   gem 'github-pages'
end

# Version specification
## activesupport to >4.1.11 per CVE-2015-3227
gem "activesupport", ">= 4.1.11"

#
## RESOLVE WINDOWS ISSUES
#

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Avoid polling for changes on Windows
gem 'wdm', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
