// Namespace our app
var app = app || {};

app.MovieRouter = Backbone.Router.extend({

	routes :{
		""             		: "noCopy",
		"phantomMenace"		: "phantomMenaceMessage",
		"attackOfTheClones"	: "attackOfTheClonesMessage",
		"revengeOfTheSith"	: "revengeOfTheSithMessage",
		"newHope"			: "newHopeMessage",
		"empireStrikesBack"	: "empireStrikesBackMessage",
		"returnOfTheJedi"	: "returnOfTheJediMessage",
        "forceAwakens"      : "forceAwakensMessage"
	},
	
	noCopy: function() {
		$("#copy").html("");
	},
	
	phantomMenaceMessage: function() {
		$("#copy").html("<p>Star Wars Episode I: The Phantom Menace<br /><a href=\"http://en.wikipedia.org/wiki/Star_Wars_Episode_I:_The_Phantom_Menace\" target=\"_blank\">More info</a></p>");
	},
	
	attackOfTheClonesMessage: function() {
		$("#copy").html("<p>Star Wars Episode II: Attack of the Clones<br /><a href=\"http://en.wikipedia.org/wiki/Star_Wars_Episode_II:_Attack_of_the_Clones\" target=\"_blank\">More info</a></p>");
	},
	
	revengeOfTheSithMessage: function() {
		$("#copy").html("<p>Star Wars Episode III: Revenge of the Sith<br /><a href=\"http://en.wikipedia.org/wiki/Star_Wars_Episode_III:_Revenge_of_the_Sith\" target=\"_blank\">More info</a></p>");
	},
	
	newHopeMessage: function() {
		$("#copy").html("<p>Star Wars Episode IV: A New Hope<br /><a href=\"http://en.wikipedia.org/wiki/Star_Wars_(film)\" target=\"_blank\">More info</a></p>");
	},
	
	empireStrikesBackMessage: function() {
		$("#copy").html("<p>Star Wars Episode V: The Empire Strikes Back<br /><a href=\"http://en.wikipedia.org/wiki/The_Empire_Strikes_Back\" target=\"_blank\">More info</a></p>");
	},
	
	returnOfTheJediMessage: function() {
		$("#copy").html("<p>Star Wars Episode VI: Return of the Jedi<br /><a href=\"http://en.wikipedia.org/wiki/Return_of_the_Jedi\" target=\"_blank\">More info</a></p>");
	},
    
    forceAwakensMessage: function() {
		$("#copy").html("<p>Star Wars Episode VII: The Force Awakens<br /><a href=\"https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens\" target=\"_blank\">More info</a></p>");
	},
    
});