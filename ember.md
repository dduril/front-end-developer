# Ember.js

### Getting Started

- **[Ember.js](https://emberjs.com/)** - main site
- **Installation Methods**
	- NPM
	- CLI

### Install Ember

	> npm install -g ember-cli@2.15

### Create a New Application

Change to development directory: **C:\development\ember-projects**

	> ember new ember-quickstart

### Change directory to _ember-quickstart_ and start the development server:

	> cd ember-quickstart
	> ember serve

### Open Browser:

	http://localhost:4200

### Define Routes

	> ember generate route scientists
	> ember generate route programmers

**app\templates\application.hbs**

	<h1>PeopleTracker</h1>

	{{outlet}}

**app\templates\scientists.hbs**

	<h2>List of Scientists</h2>

	{{people-list title="List of Scientists" people=model}}

**app\routes\scientists.js**

	import Ember from 'ember';

	export default Ember.Route.extend({
    	model() {
    	    return ['Albert Einstein', 'Isaac Newton', 'Marie Curie', 'Louis Pasteur', 'Nikola Tesla'];
    	}
	});

**app\templates\programmers.hbs**

	<h2>List of Programmers</h2>

	{{people-list title="List of Programmers" people=model}}

**app\routes\programmers.js**

	import Ember from 'ember';

	export default Ember.Route.extend({
    	model() {
        	return ['Linus Torvalds', 'Ada Lovelace', 'Grace Hopper', 'Donald Knuth', 'James Gosling'];
    	}
	});

### Create a UI Component with Click Event

	> ember generate component people-list

**app\templates\components\people-list.hbs**

	<h2>{{title}}</h2>
	
	<ul>
		{{#each people as |person|}}
			<li {{action "showPerson" person}}>{{person}}</li>
		{{/each}}
	</ul>

**app\components\people-list.js**

	import Ember from 'ember';

	export default Ember.Component.extend({
    	actions: {
    	    showPerson(person) {
    	        alert(person);
    	    }
    	}
	});

### Build Application for Production

	> ember build --env production



	
	



