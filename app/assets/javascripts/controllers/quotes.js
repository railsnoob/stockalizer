App.QuotesController = Ember.Controller.extend({
	sortProperties: ['tickerSymbol','pricingDate'],
	sortedQuotes: Ember.computed.sort("filteredQuotes", "sortProperties"),
	filteredQuotes: Ember.computed('model','ticker_id',function() {

		var ticker = this.get('ticker_id');
		var quotes = this.get('model');
		console.log("QuotesController: model",quotes);
		
		if(ticker) {
			return quotes.filterBy('tickerSymbol',ticker);
		} else {
			return quotes;
		}
	})
	
});
