App.WebsocketController = Ember.Controller.extend({
	_setup: function() {
		console.log("Websocket controller is started");

		// var client = undefined;
		
		// if ((typeof process !== 'undefined') && process.env.REDISTOGO_URL) {
		// 	var r = require("url").parse(process.env.REDISTOGO_URL);
		// 	client = require("redis").createClient(r.port, r.hostname);
		// 	client.auth(r.auth.split(":")[1]);
		// } else {
		// 	client = require("redis").createClient();
		// }

		var port = 20391;
		
		// Get
		console.log("socket port:"+port);
		
		websocket = this.websocket = new WebSocket('ws://stockalizer-node.herokuapp.com:'+port);

		this.subscribers = [];
		this.models = [];
		
		websocket.onmessage = function(event) {
			console.log("hungyen bungyed");
			if (!this.subscribers) { return;}
			console.log("message recieved by websocket controller,"+ event.data );
			var message = JSON.parse(event.data);
			this.subscribers.forEach(function(callback){callback(message)});
		}.bind(this);
		
	}.on('init'),

	subscribe: function(callback) {
		this.subscribers.pushObject(callback);
	},

	unsubscribe: function(callback) {
		this.subscribers.removeObject(callback);
	}
});
