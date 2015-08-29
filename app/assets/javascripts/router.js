// For more information see: http://emberjs.com/guides/routing/
App.Router.reopen({
	location:'auto',
	root:'/'
})

App.Router.map(function() {
	this.route('tickers',{path: '/'});
	this.route('quotes',{path: '/:ticker_id'});
	//	this.route('tickers',{path: '/'}, function() {
	//		this.route('ticker',{path: 'tickers/:ticker_id', resetNamespace: true }, function() {
	//			this.route('quotes', {resetNamespace: true} );
	//		});
	//	});
});
