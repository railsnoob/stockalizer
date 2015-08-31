namespace :db do
  task populate: :environment do
    Ticker.destroy_all
    Quote.destroy_all
    
    
    @tickers = ['AAPL', 'GOOG', 'RADM', 'CRM']
    
    @ticker_dates = { }
    
    @tickers.each do |ticker|
      @ticker_dates[ticker]=0
    end
    
    @start_date = (Time.now - 100.days).to_date
    
    def random_price
      (900.0-20.0)*rand() + 20
    end
    
    def random_ticker_symbol
      @tickers.sample
    end
    
    
    def quote_date(ticker)
      dt = @start_date + @ticker_dates[ticker].days
      @ticker_dates[ticker]+=1
      return dt
    end
    
    @tickers.each do |ticker|
      ticker_model = Ticker.create(name: ticker)

      30.times do 
        Quote.create(
                     ticker_id: ticker_model.id,
                     ticker_symbol: ticker,
                     price: random_price,
                     pricing_date: quote_date(ticker)
                     )
      end
    end
    
  end
end
