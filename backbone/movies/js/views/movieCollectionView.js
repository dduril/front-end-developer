// Namespace our app
var app = app || {};

app.MovieCollectionView = Backbone.View.extend({

	tagName: "section",
	
	render: function() {
		this.collection.each(this.addMovie, this);
		return this;
	},
	
	addMovie: function(movie) {
		var movieView = new app.MovieModelView({ model: movie });
		this.$el.append(movieView.render().el);
	}
	
});