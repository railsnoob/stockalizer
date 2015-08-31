require 'rails_helper'

RSpec.describe Api::V1::TickersController, :type=>:controller do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index', :format=> :json
      expect(response).to be_success
    end
  end

  
  describe "JSON API" do 
    it "gets a list of tickers" do 
      Ticker.create(name: "GOOG")
      Ticker.create(name: "YHOO")
      Ticker.create(name: "CRM")
      Ticker.create(name: "BABA")

      print Ticker.all
      
      get 'index', :format=>:json
      
      expect(response).to be_success
      expect(parsed_body['tickers'].length).to eq(4)      
    end
    
    it "gets a list of quotes associated with tickers in same request" do
      setup_1_ticker_1_quote
      get 'index', :format=>:json
      
      expect(response).to be_success
      expect(parsed_body['tickers'].length).to eq(1)
      expect(parsed_body['quotes'].length).to eq(1)
    end
    
    it "returns json error and not_found HTTP if ticker not found" do
      setup_1_ticker_1_quote      
      get 'show',:id=>2, :format=>:json
      # expect(response).to be_failure
      expect(response).to have_http_status(404)
    end
  end
  
  def setup_1_ticker_1_quote
    ticker_model = Ticker.create(name:"GOOG")
    quote = Quote.create ( {:ticker_id => ticker_model.id,
                           :ticker_symbol => ticker_model.name,
                           :price => 94.3434,
                           :pricing_date=> Time.now.to_date})
    
  end
  
  
  def parsed_body
    JSON.parse(response.body)
  end
  
  
end
