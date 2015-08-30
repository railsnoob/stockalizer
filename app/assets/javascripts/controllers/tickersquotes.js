App.TickersQuotesController = Ember.Controller.extend({
	sortProperties:['tickerSymbol','pricingDate'],
	sortedQuotes: Ember.computed.sort("model", "sortProperties"),
	chartSettings: Ember.computed(function() {
		return {title:{text:""}};
	}),
	chartData: Ember.computed('sortedQuotes','model','tickersController.selectedItem','tickerParam',function() {		
        var m = this.get('sortedQuotes');

		var payload = { id:'Quotes',color:'blue',data:[]};
		
		m.forEach(function(q,indx) {
            payload['data'].push([Date.UTC(q.get('pricingDate').getUTCFullYear(),q.get('pricingDate').getUTCMonth(),q.get('pricingDate').getUTCDate()),q.get('price')]);
        });
		
        return [payload];               
	})
});
