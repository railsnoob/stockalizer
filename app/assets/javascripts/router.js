// For more information see: http://emberjs.com/guides/routing/
App.Router.reopen({
	location:'auto',
	root:'/'
})

App.Router.map(function() {

	this.route('tickers',{path:'/'}, function() {
		this.route('quotes',{path: '/tickers/:tickerParam'});
	});
	this.route("not-found", { path: "*path"});
});
