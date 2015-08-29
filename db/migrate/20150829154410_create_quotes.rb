class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.string :ticker_symbol, null: false
      t.decimal :price,  precision: 8, scale: 2, null: false
      t.date :pricing_date, null: false
      t.integer :ticker_id, null: false
      t.timestamps null: false
    end
  end
end
