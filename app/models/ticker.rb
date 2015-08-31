class Ticker < ActiveRecord::Base
  has_many :quotes, dependent: :destroy
  validates :name, :presence => true
end
