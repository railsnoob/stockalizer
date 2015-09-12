App.TickersQuotesController = Ember.Controller.extend({
//	needs: ['websocket'],
	websocket: Ember.inject.controller(),
	sortProperties:['tickerSymbol','pricingDate'],

	subscribe: function() {
		console.log("subscribing to websocket - " + this);
		this.get('websocket').subscribe( function(m) {
			//console.log(this.get('model'));
			this.store.pushPayload(m);
			this.send('invalidateModel');
		}.bind(this))},

	unsubscribe: function() {
		console.log("unsubscribing to websocket");
		this.get('websocket').unsubscribe( function(m) { this.recieveMessage(m)});
	},
	
	sortedQuotes: Ember.computed.sort("model", "sortProperties"),

	chartData: Ember.computed('sortedQuotes','model','tickerParam',function() {		
        var m = this.get('sortedQuotes');

		var payload = { id:'Quotes',color:'blue',data:[]};
		
		m.forEach(function(q,indx) {
			console.log(q.get('pricingDate'));
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
