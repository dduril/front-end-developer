# React

### Facebook Projects

- **<a href="https://code.facebook.com/projects/" target="_blank" title="Facebook Open Source">Facebook Open Source Projects</a>**
- **<a href="https://facebook.github.io/react/" target="_blank" title="React">React</a>** (JavaScript library)
- **<a href="https://facebook.github.io/react-native/" target="_blank" title="React Native">React Native</a>** (For Native Mobile Apps)
- **<a href="https://facebook.github.io/flux/" target="_blank" title="Flux">Flux</a>** (Application architecture)
- **<a href="https://facebook.github.io/jest/" target="_blank" title="Jest">Jest</a>** (JavaScript testing framework)
- **<a href="https://yarnpkg.com/" target="_blank" title="Yarn">Yarn</a>** (Package manager)

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