class Api::V1::QuotesController < ApplicationController
  respond_to :json
  
  def index
    @ticker = Ticker.find(params[:ticker_id])
    respond_with @ticker.quotes
  end
end
