App.TickersRoute = Ember.Route.extend({
	model:function(){
		console.log("tickersRoute");
		return this.store.findAll('ticker');
	}
});
