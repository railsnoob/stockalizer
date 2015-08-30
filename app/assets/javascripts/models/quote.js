App.Quote = DS.Model.extend({
	price: DS.attr('number'),
	pricingDate: DS.attr('date'),
	tickerSymbol: DS.attr('string'),
	createdAt: DS.attr('date'),
	ticker: DS.belongsTo('ticker'),
	prettyDateString: function(){
		return (this.get('pricingDate').getUTCMonth() + 1).toString() +"/" +(this.get('pricingDate').getUTCDate()+1).toString()   +"/"+ this.get('pricingDate').getUTCFullYear().toString();
	}.property('pricingDate')
});
