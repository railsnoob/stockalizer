class HomeController < ApplicationController
  def index
    
  end
  
  def create_entry

    params.require(:ticker_string)
    
    # create N values 
    
    ticker = Ticker.where(:name => params[:ticker_string]).first
    
    last_q = Quote.last
    
    q = Quote.create( ticker_id: ticker.id,
                     ticker_symbol: ticker.name,
                     price: random_price,
                     pricing_date: last_q.pricing_date.to_time + 1.day )    
    
    
    
    logger.error("Created entry into redis,#{q} === #{QuoteSerializer.new(q).to_json}")
    
    # Push to redis 
    $redis.publish "quote-added", QuoteSerializer.new(q).to_json
    
    flash[:notice] = "Added data"
    redirect_to home_path
  end
 
  private
   def random_price
      (900.0-20.0)*rand() + 20
    end
   
   def quote_date(ticker)
     dt = @start_date + @ticker_dates[ticker].days
     @ticker_dates[ticker]+=1
     return dt
   end
end
