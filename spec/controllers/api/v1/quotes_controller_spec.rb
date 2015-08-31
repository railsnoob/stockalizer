require 'rails_helper'

RSpec.describe Api::V1::QuotesController, :type=>:controller do

  describe "GET 'index'" do
    it "returns http success" do
      setup_1_ticker_1_quote
      
      get 'index', :ticker_id=>1, :format=>:json
      
      response.should be_success
    end
  end

  def setup_1_ticker_1_quote
    ticker_model = Ticker.create(name:"GOOG")
    quote = Quote.create ( {:ticker_id => ticker_model.id,
                           :ticker_symbol => ticker_model.name,
                           :price => 94.3434,
                           :pricing_date=> Time.now.to_date})
    
  end
  
end
