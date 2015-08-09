# Node.js

Install Node.js to your system.

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

	C:\dev\node\demo>
	C:\dev\node\demo>

Install Gulp using <code>--save-dev</code> option.

	C:\dev\node\demo>npm install gulp --save-dev

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







