class Api::V1::TickersController < ApplicationController
  respond_to :json
  
  def index
    respond_with Ticker.all
  end

  def show
    respond_with Ticker.find(params[:id])
  end
  
end
