class AddIndexForTickerIdInQuote < ActiveRecord::Migration
  def change
    add_index :quotes, :ticker_id
  end
end
