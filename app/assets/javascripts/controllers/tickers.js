App.TickersController = Ember.Controller.extend({
	selectedIndex:null,

	selectedItem: Ember.computed('selectedIndex',function() {
		const index = this.get('selectedIndex');
		const indexWithPrompt = index - 1;
		return this.get('model').objectAt(indexWithPrompt);
		}),

	watchType: function() {
		console.log('TickersController: New Model Selected' + this.get('selectedItem').get('name'));
		//TODO  need to change the graph from here.
//		this.transitionToRoute('/'+this.get('selectedItem').);
		this.transitionToRoute('tickers.quotes',this.get('selectedItem').get('name'));
	}.observes('selectedItem')
	
});
