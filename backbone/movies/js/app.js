var m1 = new app.MovieModel({ 
	title: 'The Phantom Menace', 
	year: 1999, 
	runtime: 133,
	link: "phantomMenace"
});

var m2 = new app.MovieModel({ 
	title: 'Attack of the Clones', 
	year: 2002, 
	runtime: 142,
	link: "attackOfTheClones" 
});

var m3 = new app.MovieModel({ 
	title: 'Revenge of the Sith', 
	year: 2005, 
	runtime: 140,
	link: "revengeOfTheSith" 
});

var m4 = new app.MovieModel({ 
	title: 'A New Hope', 
	year: 1977, 
	runtime: 123,
	link: "newHope" 
});

var m5 = new app.MovieModel({ 
	title: 'The Empire Strikes Back', 
	year: 1980, 
	runtime: 129,
	link: "empireStrikesBack"
});

var m6 = new app.MovieModel({ 
	title: 'Return of the Jedi', 
	year: 1983, 
	runtime: 136,
	link: "returnOfTheJedi" 
});

var m7 = new app.MovieModel({ 
	title: 'Force Awakens', 
	year: 2015, 
	runtime: 135,
	link: "forceAwakens" 
});

// create array of objects
var movieList = new app.MovieCollection([
	m1, m2, m3, m4, m5, m6, m7
]);

var m7 = new app.MovieModel({ 
	title: 'Avatar', 
	year: 2009, 
	runtime: 178
});

var m8 = new app.MovieModel({ 
	title: 'Inception', 
	year: 2010, 
	runtime: 148
});

// add objects to collection
//movieList.add(m7);
//movieList.add(m8)

// display collection
console.log(movieList.toJSON());

// remove objects from collection
//movieList.remove(m7);
//movieList.remove(m8)

// change the title of one of the movies
//m6.set('title', "Revenge of the Jedi");

console.log(m1.toJSON());
console.log(m2.toJSON());
console.log(m3.toJSON());
console.log(m4.toJSON());
console.log(m5.toJSON());
console.log(m6.toJSON());


var movieGroupView = new app.MovieCollectionView({ collection: movieList });

$("#allMovies").html(movieGroupView.render().el);


var movieRouter = new app.MovieRouter();

Backbone.history.start();
