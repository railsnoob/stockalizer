App.QuotesController = Ember.Controller.extend({
	sortProperties: ['tickerSymbol','pricingDate'],
	sortedModel: Ember.computed.sort("filteredQuotes", "sortProperties"),
	filteredQuotes: Ember.computed('model','ticker_id',function() {

		var ticker = this.get('ticker_id');
		var quotes = this.get('model');

		if(ticker) {
			return quotes.filterBy('tickerSymbol',ticker);
		} else {
			return quotes;
		}
	})
	
});
