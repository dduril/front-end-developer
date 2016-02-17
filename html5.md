# HTML5

The following document shows a simple progression for an HTML5 web page.

### doctype Element
	<!DOCTYPE html>

### html Element
	<!DOCTYPE html>
	<html>	
	</html>

### head Element
	<!DOCTYPE html>
	<html>
		<head>
			<title>Hello World!</title>
		</head>
	</html>

### body Element
	<!DOCTYPE html>
	<html>
		<head>
			<title>Hello World!</title>
		</head>
		<body>
		</body>
	</html>

### meta Elements
	<!DOCTYPE html>
	<html>
		<head>	
			<title>Hello World!</title>
			<meta charset="UTF-8">
			<meta name="author" content="Doug Duril" />
			<meta name="description" content="Template Example" />	
		</head>
		<body>
		</body>
	</html>

### p, ul, li and href Elements
	<!DOCTYPE html>
	<html>
		<head>	
			<title>HTML5</title>
			<meta charset="UTF-8">
			<meta name="author" content="Doug Duril" />
			<meta name="description" content="Template Example" />
		</head>
		<body>
			<p>Getting Started with HTML5</p>
			<ul>
				<li><a href="http://www.html5rocks.com/en/">HTML5 Rocks</a></li>
				<li><a href="https://developer.mozilla.org/en-US/">MDN - HTML5</a></li>	
				<li><a href="https://www.w3.org/TR/html5/">W3C - HTML5</a></li>
			</ul>
		</body>
	</html>

### style Element
	<!DOCTYPE html>
	<html>
		<head>	
			<title>HTML5</title>
			<meta charset="UTF-8">
			<meta name="author" content="Doug Duril" />
			<meta name="description" content="Template Example" />		
			<style type="text/css">
				body {
					color: #000;
					background-color: #fff;
					width: 80%;
					margin: 0 auto;
				}
			</style>
		</head>
		<body>
			<p>Getting Started with HTML5</p>
			<ul>
				<li><a href="http://www.html5rocks.com/en/">HTML5 Rocks</a></li>
				<li><a href="https://developer.mozilla.org/en-US/">MDN - HTML5</a></li>	
				<li><a href="https://www.w3.org/TR/html5/">W3C - HTML5</a></li>
			</ul>
		</body>
	</html>

### link Element
	<!DOCTYPE html>
	<html>
		<head>	
			<title>HTML5</title>
			<meta charset="UTF-8">
			<meta name="author" content="Doug Duril" />
			<meta name="description" content="Template Example" />		
			<link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
		</head>
		<body>
			<p>Getting Started with HTML5</p>
			<ul>
				<li><a href="http://www.html5rocks.com/en/">HTML5 Rocks</a></li>
				<li><a href="https://developer.mozilla.org/en-US/">MDN - HTML5</a></li>	
				<li><a href="https://www.w3.org/TR/html5/">W3C - HTML5</a></li>
			</ul>
		</body>
	</html>

### script Element
	<!DOCTYPE html>
	<html>
		<head>	
			<title>HTML5</title>
			<meta charset="UTF-8">
			<meta name="author" content="Doug Duril" />
			<meta name="description" content="Template Example" />		
			<link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
			<script type="text/javascript">
                console.log("JavaScript is running.");
            </script>
		</head>
		<body>
			<p>Getting Started with HTML5</p>
			<ul>
				<li><a href="http://www.html5rocks.com/en/">HTML5 Rocks</a></li>
				<li><a href="https://developer.mozilla.org/en-US/">MDN - HTML5</a></li>	
				<li><a href="https://www.w3.org/TR/html5/">W3C - HTML5</a></li>
			</ul>
		</body>
	</html>

### script Element - External
	<!DOCTYPE html>
	<html>
		<head>	
			<title>HTML5</title>
			<meta charset="UTF-8">
			<meta name="author" content="Doug Duril" />
			<meta name="description" content="Template Example" />		
			<link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
			<script src="assets/js/app.js"></script>
		</head>
		<body>
			<p>Getting Started with HTML5</p>
			<ul>
				<li><a href="http://www.html5rocks.com/en/">HTML5 Rocks</a></li>
				<li><a href="https://developer.mozilla.org/en-US/">MDN - HTML5</a></li>	
				<li><a href="https://www.w3.org/TR/html5/">W3C - HTML5</a></li>
			</ul>
		</body>
	</html>

### noscript Element
	<!DOCTYPE html>
	<html>
		<head>	
			<title>HTML5</title>
			<meta charset="UTF-8">
			<meta name="author" content="Doug Duril" />
			<meta name="description" content="Template Example" />		
			<link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
			<script src="assets/js/app.js"></script>
			<noscript>
				<h2>This page works better with JavaScript.</h2>
			</noscript>
		</head>
		<body>
			<p>Getting Started with HTML5</p>
			<ul>
				<li><a href="http://www.html5rocks.com/en/">HTML5 Rocks</a></li>
				<li><a href="https://developer.mozilla.org/en-US/">MDN - HTML5</a></li>	
				<li><a href="https://www.w3.org/TR/html5/">W3C - HTML5</a></li>
			</ul>
		</body>
	</html>
