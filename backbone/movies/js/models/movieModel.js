// Namespace our app
var app = app || {};

app.MovieModel = Backbone.Model.extend({

	defaults: {
		title: "--",
		year: 0,
		runtime: 0,
		link: "--"
	},
	
	initialize: function(){
		console.log("A model instance named " + this.get("title") +
			" has been created.");
	
		this.on('change', function(){
			console.log("Something in our model has changed.");
		});
		
		this.on('change:title', function(){
			console.log("The title has been updated to: " + this.get("title"));
		});
	}
	
});