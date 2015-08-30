App.TickersController = Ember.Controller.extend({
	selectedIndex:null,

	selectedItem: Ember.computed('selectedIndex',function() {
		const index = this.get('selectedIndex');
		const indexWithPrompt = index - 1;
		return this.get('model').objectAt(indexWithPrompt);
		}),

	watchType: function() {
		this.transitionToRoute('tickers.quotes', this.get('selectedItem').get('name') );
	}.observes('selectedItem')
	
});
