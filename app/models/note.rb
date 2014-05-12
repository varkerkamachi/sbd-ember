class Note < ActiveRecord::Base
  validates :name, presence: true
  validates :note, presence: true
end
