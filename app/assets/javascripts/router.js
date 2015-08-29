// For more information see: http://emberjs.com/guides/routing/
App.Router.reopen({
	location:'auto',
	root:'/'
})

App.Router.map(function() {

	this.route('index',{path: '/'});
	this.route('index',{path: '/:ticker_id'});

});
