# Node.js

## npm

Install Node.js to your system. (Windows)

	C:\users\[name]\AppData\Roaming\npm\node_modules

Check the version of Node:

	C:\>node -v

Node installs with a package manager - npm. 
Check the version of npm:

	C:\>npm -v

Install packages using npm:

	C:\>npm install -g bower
	C:\>npm install -g gulp

And check the version numbers:

	C:\>bower -v
	C:\>gulp -v

Create a package.json file:

	C:\dev\node\demo>npm init

Install Bootstrap and jQuery using <code>--save</code> option.

	C:\dev\node\demo>npm bootstrap --save
	C:\dev\node\demo>npm jquery --save

Install Gulp using <code>--save-dev</code> option.

	C:\dev\node\demo>npm install gulp --save-dev

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

Create a bower.json file:

	C:\dev\node\demo>bower init

You can also create a .bowerrc file and place it at the root of your project folder. This file will then install all Bower libraries into the specified folder:

    {
    "directory": "bower_components",
	}

Install bower.json file:

    C:\dev\node\demo>bower install







