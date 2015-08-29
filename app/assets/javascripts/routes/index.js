App.IndexRoute = Ember.Route.extend({
	setupController: function(controller, models) {
		if(this.get('ticker_id')){
			controller.set('ticker_id',this.get('ticker_id'));
		}
		controller.set('tickers',models.tickers);
		controller.set('quotes',models.quotes);
			},
	model:function() {
		if(typeof params !== 'undefined') {
		this.set('ticker_id',params.ticker_id);
		}
		return Ember.RSVP.hash({
			tickers: this.store.findAll('ticker'),
			quotes: this.store.peekAll('quote')
		});
	}
});
