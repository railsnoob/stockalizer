App.TickersQuotesController = Ember.Controller.extend({
	sortProperties:['tickerSymbol','pricingDate'],
	sortedQuotes: Ember.computed.sort("model", "sortProperties"),

	chartData: Ember.computed('sortedQuotes','model','tickerParam',function() {		
        var m = this.get('sortedQuotes');

		var payload = { id:'Quotes',color:'blue',data:[]};
		
		m.forEach(function(q,indx) {
            payload['data'].push([Date.UTC(q.get('pricingDate').getUTCFullYear(),q.get('pricingDate').getUTCMonth(),q.get('pricingDate').getUTCDate()),q.get('price')]);
        });
		
        return [payload];               
	}),

	chartSettings: Ember.computed('sortedQuotes','model','tickerParam',function() {
		var ticker = this.get('tickerParam');
		console.log("chartSettings: tickerParam",ticker );
		return {title:{text:ticker}};
	})
});
