class Remote < ActiveRecord::Base
  belongs_to :configuration_system
  belongs_to :audit
  
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :name, length: { in: 1..48 }

  before_save :parse_url_host


  private
  # # strips any entered scheme from url and www if url is not a numerical ip addr
  # # then prepends https and stores to dB  
  def parse_url_host
    url = self.url.gsub(/^https?\:\/\//, '')
    url = url.gsub(/www\./, '') unless (url.match(/www\./).blank? && url.gsub(/www\./, '').match(/[A-Za-z]/))
    self.url = "https://" + url
  end
end
