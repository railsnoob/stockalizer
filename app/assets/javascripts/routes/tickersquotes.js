App.TickersQuotesRoute = Ember.Route.extend({

	setupController:function(controller,model) {
		controller.set('tickerParam',this.get('tickerParam'));
		controller.set('model',model);
	},
	
	model:function(params){
		var quotes = this.store.peekAll('quote');
		this.set('tickerParam',params.tickerParam);
		return quotes.filterBy('tickerSymbol',params.tickerParam);
	}	
});
