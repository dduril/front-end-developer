// Namespace our app
var app = app || {};

app.MovieModelView = Backbone.View.extend({

	tagName: "article",
	className: "movieListItem",
	
	template: _.template( $("#movieElement").html() ),
	
	render: function(){
		var movieTemplate = this.template(this.model.toJSON());
		this.$el.html(movieTemplate);
		return this;
	},
	
	events: {
		'mouseover': 'addBgColor',
		'mouseout': 'removeBgColor'
	},
	
	addBgColor: function() {
		this.$el.addClass("bgDivColor");
	},
	
	removeBgColor: function() {
		this.$el.removeClass("bgDivColor");
	}
	
});