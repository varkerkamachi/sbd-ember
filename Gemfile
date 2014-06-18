source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.1'

gem 'ember-rails', '0.14.1'
# to handle indented templating with haml & handlebars
gem 'emblem-rails', '0.2.1'
gem 'ember-data-source', '0.14'
gem 'haml', '~> 4.0.5'
gem 'haml-rails', '~> 0.5.3'
gem 'handlebars_assets'
# to handle flattening of rails json into ember digestible
gem 'active_model_serializers', '~> 0.8.1'

# Use sqlite3 as the database for Active Record
# gem 'sqlite3'
# gem 'mysql2'
gem 'pg', '~> 0.17.1'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.1'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails', ' ~> 3.1.0'
gem 'jquery-ui-rails', '4.2.1'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

gem 'hoe', '3.12.0'
# Daemons-rails gem to gather data for event timeline in GUI
gem 'daemons-rails', '1.2.1'
gem 'eventmachine', '1.0.3'
gem 'em-websocket', '0.5.1'

gem 'devise', '~> 3.2.4'
gem 'cancancan', '~> 1.8.2'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.1.1'

group :development do
  # gem 'debugger'
  gem 'thin', '1.6.2'
  gem 'pry', '~> 0.10.0'
  gem 'html2haml', '~> 1.0.1'
  gem 'quiet_assets', '~> 1.0.2'
end

group :test do
  gem 'jasmine-rails', '0.9.0'
  gem 'ci_reporter', '~> 1.9.2'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0.1'
  gem 'factory_girl_rails', '~> 4.4.1'
  # Needs require: false.  Can't be required by Rails, causing crash.
  # https://github.com/guard/guard-rspec
  gem 'guard-rspec', '~> 4.2.10', require: false
  
  gem 'nokogiri', '1.6.2.1'
  # http://www.opinionatedprogrammer.com/2011/02/capybara-and-selenium-with-rspec-and-rails-3/
  gem 'capybara', '2.3.0'
  gem 'selenium-webdriver', '~> 2.42.0'
  gem 'database_cleaner', '~> 1.3.0'
end


group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
