class Ticker < ActiveRecord::Base
  has_many :quotes, dependent: :destroy
end
