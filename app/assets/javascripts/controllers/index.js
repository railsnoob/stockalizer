App.IndexController = Ember.Controller.extend({
	sortProperties: ['tickerSymbol','pricingDate'],
    sortedModel: Ember.computed.sort("quotes", "sortProperties"),
    chartData2: Ember.computed('quotes.@each.price', function() {
		return [{ id:'Quotes',data:[[Date.UTC(2015,5,3),3.4],[Date.UTC(2015,5,4),39.5]], color: 'blue' }]
   }),
	
	chartData: Ember.computed('filteredQuotes',function() {
		var ticker_id = this.get('ticker_id')
		console.log('chartData: the ticker chas changed',ticker_id);

		var vals;
		var m = this.get('filteredQuotes');
	
		var payload = { id:'Quotes',color:'blue',data:[]};
		console.log("chartData Changes", m);
		
		m.forEach(function(q,indx) {
			console.log(q.get('pricingDate'),q.get('price'));
			console.log(Date.UTC(q.get('pricingDate').getFullYear(),q.get('pricingDate').getMonth(),q.get('pricingDate').getDay()));
			console.log(q.get('pricingDate').getFullYear(),q.get('pricingDate').getMonth(),q.get('pricingDate').getUTCDate());			
			payload['data'].push([Date.UTC(q.get('pricingDate').getUTCFullYear(),q.get('pricingDate').getUTCMonth(),q.get('pricingDate').getUTCDate()),q.get('price')]);
		});

		//console.log("ddddd",d);
		
		// payload["data"]=[[Date.UTC(2015,5,3),3.4],[Date.UTC(2015,5,4),39.5]]
		console.log("payload",payload);
		return [payload];		
	}),
	
	filteredQuotes: Ember.computed('sortedModel','ticker_id','selectedItem',function() {
		var ticker = this.get('ticker_id');
		var quotes = this.get('sortedModel');
		var selected = this.get('selectedItem');
		console.log('filteredQuotes: the ticker has changed',ticker);
		if(typeof selected !== 'undefined') {
			ticker = selected.get('name');
		}
		
		if( ticker ) {
			console.log('filteredQuotes: ticker',ticker);
			return quotes.filterBy('tickerSymbol',ticker);
		} else {
            return [];
		}
	}),

	selectedIndex: null,
	
	selectedItem: Ember.computed('selectedIndex', function() {
		const index = this.get('selectedIndex');
		const indexWithPrompt = index - 1;
		return this.get('tickers').objectAt(indexWithPrompt);
	}),
	watchType: function(){
		console.log('this model changed  '+ this.get('selectedItem').get('name'));
	//	this.get('chartData');, {queryParams: {ticker_id: this.get('selectedItem').get('name') }
		 this.transitionToRoute('/'+this.get('selectedItem').get('name'));

		//this.transitionToRoute('quotes',this.get('selectedItem'));
   }.observes('selectedItem')



});
