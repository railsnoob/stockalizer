App.QuotesRoute = Ember.Route.extend({

	setupController: function(controller,model) {
		console.log("QuotesRoute.setupController(): entered");
		controller.set('ticker_id', this.get('ticker_id'));
		controller.set('model',model);
	},
	
	model: function(params) {
		this.set('ticker_id',params.ticker_id);
		return this.store.peekAll('quote');
	}
});
