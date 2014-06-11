class HomeController < ApplicationController
  layout 'application'

  def index
    @greeting = 'Welcome to SBNS'
  end
end
