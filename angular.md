# AngularJS

**Some references that might be helpful:**

- **<a href="https://angularjs.org/" target="_blank">AngularJS</a>**
- **<a href="https://docs.angularjs.org/misc/started" target="_blank">Getting Started</a>**

### Basic Example

	<!doctype html>
	<html lang="en" ng-app>
	<head>
		<meta charset="utf-8">
		<title>AngularJS Template</title>
		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>
	</head>
	<body>
		<input type="text" ng-model="name">
		<h2>Welcome {{name}}</h2>
	</body>
	</html>