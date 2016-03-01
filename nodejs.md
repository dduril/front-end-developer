# Node.js

### References

- **<a href="https://nodejs.org/en/" target=_blank">Node.js</a>**
- **<a href="https://www.npmjs.com/" target=_blank">npm</a>**
- **<a href="http://bower.io/" target=_blank">Bower</a>**

## node.js

Install node.js to your system. (Windows)

	C:\users\[name]\AppData\Roaming\npm\node_modules

Check the version of node:

	C:\>node -v

Simple node program - hello_world.js:

	var http = require('http');

	http.createServer(function (request, response) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end('<html><body><h2>Hello World!</h2></body></html');
	}).listen(3000, 'localhost');

	console.log('Server running at http://localhost:3000/');

Run node program:

	C:\>node hello_world.js

Launch Chrome and type: localhost:3000

## npm

Some very popular npm packages: <code>angular</code>, <code>bootstrap</code>, <code>bower</code>, <code>express</code>, <code>jquery</code>, <code>karma</code>, <code>mongodb</code>, <code>mongoose</code>, <code>yo</code>

Node installs with a package manager - npm. 
Check the version of npm:

	C:\>npm -v

Install some packages using npm:

	C:\>npm install -g bower
	C:\>npm install -g gulp

And check their version numbers:

	C:\>bower -v
	C:\>gulp -v

Create a package.json file for your project:

	C:\dev\node\demo>npm init

Install Bootstrap and jQuery using the <code>--save</code> option. 

	C:\dev\node\demo>npm bootstrap --save
	C:\dev\node\demo>npm jquery --save

You can also install multiple packages using <code>--save</code>.

	C:\dev\node\demo>npm angular bootstrap jqery --save

Install Gulp using <code>--save-dev</code> option.

	C:\dev\node\demo>npm install gulp --save-dev

Install multiple packages to the devDependencies section of the package.json file.
	
	C:\development\demo>npm install gulp gulp-jscs gulp-jshint --save-dev

### Update

	C:\development\demo>npm update


### Uninstall

	C:\development\demo>npm uninstall



An alternative approach would be to use **Bower** to install **Client-side** libraries like Angular and Bootstrap. 

And to use **npm** to install **Server-side** libraries like Grunt and Gulp. This creates a nice separation between all of the libraries, which can easily grow in size and numbers.

The package.json file:

	{
  		"name": "demo",
  		"version": "1.0.0",
  		"description": "demo node application",
  		"main": "index.js",
  		"scripts": {
    		"test": "echo \"Error: no test specified\" && exit 1"
  		},
  		"author": "",
  		"license": "ISC",
  		"dependencies": {
    		"bootstrap": "^3.3.5",
    		"jquery": "^2.1.4"
  		},
  		"devDependencies": {
    		"gulp": "^3.9.0"
  		}
	}

Install package.json file:

	C:\dev\node\demo>npm install

## Bower

### install

	C:\>npm install -g bower

### help

	C:\development\demo>bower help

### info

	C:\development\demo>bower info jquery

### init

	C:\development\demo>bower init

### install

Install using project's bower.json file.

	C:\development\demo>bower install


Install a single package to the dependencies section of the bower.json file.
	
	C:\development\demo>bower install --save angular


Install multiple packages to the dependencies section of the bower.json file.
	
	C:\development\demo>bower install angular bootstrap jquery --save

### list
	
	C:\development\demo>bower list

### search

	C:\development\demo>bower search jquery

### update
	
	C:\development\demo>bower update

### uninstall
	
	C:\development\demo>bower uninstall

### Check Bower version
	
	C:\development\demo>bower -v

### Create a bower.json file:
	
	C:\dev\node\demo>bower init

You can also create a .bowerrc file and place it at the root of your project folder. This file will then install all Bower libraries into the specified folder:

    {
    "directory": "app/bower_components",
	}






