# React

### Facebook Projects

- **[Facebook Open Source Projects](https://code.facebook.com/projects/)**
- **[React](https://facebook.github.io/react/)** (JavaScript library)
- **[React Native](https://facebook.github.io/react-native/)** (For Native Mobile Apps)
- **[Flux](https://facebook.github.io/flux/)** (Application architecture)
- **[Jest](https://facebook.github.io/jest/)** (JavaScript testing framework)
- **[Yarn](https://yarnpkg.com/)** (Package manager)

### Basic Example

	<!DOCTYPE html>
	<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>React - Getting Started</title>
    </head>
    <body>

        <h1>React - Getting Started</h1>
        <hr />
        
        <div id="example"></div>
        <script type="text/babel">
            ReactDOM.render(
                <h2>Hello, world!</h2>,
                document.getElementById('example')
            );
        </script>

    <script src="dist/js/react.js"></script>
    <script src="dist/js/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    </body>
	</html>

### Basic Example using Bootstrap

	<!DOCTYPE html>
	<html lang="en">
	    <head>
	        <meta charset="utf-8">
	        <title>React - Getting Started</title>
	        <link rel="stylesheet" href="dist/css/bootstrap.min.css">
	        <link rel="stylesheet" href="dist/css/bootstrap-theme.min.css">
	    </head>
	    <body>
	
	        <div class="container">
	            <div class="row">
	                <div class="col-md-8">
	                    <h1>React - Getting Started</h1>
	                    <hr />
	                    
	                    <div id="example"></div>
	                    <script type="text/babel">
	                        ReactDOM.render(
	                            <h2>Hello, world!</h2>,
	                            document.getElementById('example')
	                        );
	                    </script>
	                </div>
	            </div>
	        </div>
	
	    <script src="dist/js/bootstrap.min.js"></script>
	    <script src="dist/js/react.js"></script>
	    <script src="dist/js/react-dom.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
	    </body>
	</html>

### Using Bootstrap and Separate JS File

**index.html**

	<!DOCTYPE html>
	<html lang="en">
	    <head>
	        <meta charset="utf-8">
	        <title>React - Getting Started</title>
	        <link rel="stylesheet" href="dist/css/bootstrap.min.css">
	        <link rel="stylesheet" href="dist/css/bootstrap-theme.min.css">
	    </head>
	    <body>
	
	        <div class="container">
	            <div class="row">
	                <div class="col-md-8">
	                    <h1>React - Getting Started</h1>
	                    <hr />
	                    
	                    
	                    <div id="example"></div>
	                    <br />(using separate file - src/helloworld.js)
	
	                </div>
	            </div>
	        </div>
	
	    <script src="dist/js/bootstrap.min.js"></script>
	    <script src="dist/js/react.js"></script>
	    <script src="dist/js/react-dom.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
	    <script type="text/babel" src="src/helloworld.js"></script>
	    </body>
	</html>

**helloworld.js**

	ReactDOM.render(
	    <h2>Hello, world!</h2>,
	    document.getElementById('example')
	);