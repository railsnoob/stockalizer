App.TickersRoute = Ember.Route.extend({
	model:function(){return this.store.findAll('ticker');}
});
