App.TickersQuotesRoute = Ember.Route.extend({
	model:function(params){
		var quotes = this.store.peekAll('quote')
		return quotes.filterBy('tickerSymbol',params.tickerParam);
	}	
});
