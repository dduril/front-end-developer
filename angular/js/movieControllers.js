var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.movies = [
	  {
		"title" : "Episode I: The Phantom Menace",
		"year" : 1999,
		"runtime" : 133,
		"image" : "PhantomMenace",
		"link"  : "http://en.wikipedia.org/wiki/Star_Wars_Episode_I:_The_Phantom_Menace"
	  },
	  {
		"title" : "Episode II: Attack of the Clones",
		"year" : 2002,
		"runtime" : 142,
		"image" : "AttackoftheClones",
		"link"  : "http://en.wikipedia.org/wiki/Star_Wars_Episode_II:_Attack_of_the_Clones"
	  },
	  {
		"title" : "Episode III: Revenge of the Sith",
		"year" : 2005,
		"runtime" : 140,
		"image" : "RevengeoftheSith",
		"link"  : "http://en.wikipedia.org/wiki/Star_Wars_Episode_III:_Revenge_of_the_Sith"
	  },
	  {
		"title" : "Episode IV: A New Hope",
		"year" : 1977,
		"runtime" : 123,
		"image" : "StarWars",
		"link"  : "http://en.wikipedia.org/wiki/Star_Wars_(film)"
	  },
	  {
		"title" : "Episode V: The Empire Strikes Back",
		"year" : 1980,
		"runtime" : 129,
		"image" : "EmpireStrikesBack",
		"link"  : "http://en.wikipedia.org/wiki/The_Empire_Strikes_Back"
	  },
	  {
		"title" : "Episode VI: Return of the Jedi",
		"year" : 1983,
		"runtime" : 136,
		"image" : "ReturnoftheJedi",
		"link"  : "http://en.wikipedia.org/wiki/Return_of_the_Jedi"
	  },
      {
		"title" : "Episode VII: The Force Awakens",
		"year" : 2015,
		"runtime" : 135,
		"image" : "ForceAwakens",
		"link"  : "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens"
	  }  
	]
});