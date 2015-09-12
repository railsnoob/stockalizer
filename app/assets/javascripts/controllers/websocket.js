App.WebsocketController = Ember.Controller.extend({
	_setup: function() {
		console.log("Websocket controller is started");
		websocket = this.websocket = new WebSocket('ws://localhost:8080');

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
