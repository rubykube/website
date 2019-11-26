# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Blog Settings

activate :blog do |blog|
  #blog.sources = "articles/{year}-{month}-{day}-{title}.html"
  blog.sources = "articles/{category}/{year}-{month}-{day}-{title}.html"
  blog.permalink = "{category}/{title}.html"
  blog.taglink = "{tag}.html"
  blog.prefix = 'blog'
  blog.layout = "article_layout"
  blog.tag_template = "blog/tag.html"
end

set :port, 8080

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

activate :external_pipeline,
    name: :webpack,
    command: build? ? 'npm run build' : 'npm run watch',
    source: 'dist',
    latency: 1

files.watch :source, path: 'assets/images', destination_dir: 'images'
