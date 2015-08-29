App.Quote = DS.Model.extend({
	price: DS.attr('number'),
	pricingDate: DS.attr('date'),
	tickerSymbol: DS.attr('string'),
	createdAt: DS.attr('date'),
	ticker: DS.belongsTo('ticker')
});
