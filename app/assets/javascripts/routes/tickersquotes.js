App.TickersQuotesRoute = Ember.Route.extend({

	setupController:function(controller,model) {
		controller.set('tickerParam',this.get('tickerParam'));
		controller.set('model',model);
	},
	
	model:function(params){
		console.log("model created - TICKERSQUOTES")
		var quotes = this.store.peekAll('quote');
		this.set('tickerParam',params.tickerParam);
		return quotes.filterBy('tickerSymbol',params.tickerParam) ? 		quotes.filterBy('tickerSymbol',params.tickerParam) : [] ;
	},

	activate: function() {
		this.controllerFor('TickersQuotes').subscribe();
	},

	deactivate: function() {
		this.controllerFor('TickersQuotes').unsubscribe();
	},
	
	actions: { 
		invalidateModel:function() {
			this.refresh();
			}
		}
});
