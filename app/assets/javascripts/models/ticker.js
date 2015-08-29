App.Ticker = DS.Model.extend({
	name: DS.attr('string'),
	createdAt: DS.attr('date'),
	quotes: DS.hasMany('quotes')
});
						 
