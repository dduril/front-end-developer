# AngularJS

**Some references to get started:**

- **<a href="https://angularjs.org/" target="_blank">AngularJS</a>**
- **<a href="https://angular.io/docs/ts/latest/" target="_blank">AngularJS - Documentation</a>**
- **<a href="https://docs.angularjs.org/misc/started" target="_blank">AngularJS - Getting Started</a>**

The documentation contains some excellent tutorials for getting started with Angular applications development using TypeScript, JavaScript or Dart.

Here are a few basic examples making use of CDN for Angular.

#### Basic Example

	<!doctype html>
	<html lang="en" ng-app>
	<head>
		<meta charset="utf-8">
		<title>AngularJS Template</title>
		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>
	</head>
	<body>
		<h1>AngularJS Example</h1>
		<hr />

		<label for="name">First Name: </label>
		<input id="name" type="text" ng-model="name">

		<br /><br />
		<h2>Welcome {{name}}</h2>
	</body>
	</html>

#### Basic Example using Bootstrap

	<!doctype html>
	<html lang="en" ng-app>
		<head>
			<meta charset="utf-8">
			<title>AngularJS - Example</title>
	        <link rel="stylesheet" href="dist/css/bootstrap.min.css">
	        <link rel="stylesheet" href="dist/css/bootstrap-theme.min.css">
		</head>
		<body>
	    
	    <div class="container">
	        <div class="row">
	            <div class="col-md-8">
	                <h1>AngularJS - Example</h1>
	                <hr />
	                <form class="form-inline">
	                	<div class="form-group">
	                	<label for="name" style="width: 120px;">First Name: </label>
	                	<input ng-model="name" id="name" class="form-control" type="text" placeholder="Your Name" size="32">
	                </form> 
	                <br /><br />
	                <h2>Welcome {{name}}</h2>
	            </div>
	        </div>
	    </div>
	    <script src="dist/js/bootstrap.min.js"></script>
	    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>
		</body>
	</html>