class Quote < ActiveRecord::Base
  belongs_to :ticker
  validates :price, :presence => true
  validates :pricing_date, :presence => true
  validates :ticker_id, :presence => true
  
end
