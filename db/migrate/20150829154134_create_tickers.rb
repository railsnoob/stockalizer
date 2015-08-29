class CreateTickers < ActiveRecord::Migration
  def change
    create_table :tickers do |t|
      t.string :name, :null=>false
      t.timestamps null: false
    end
    
    
    
  end
end
