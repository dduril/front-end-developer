# JavaScript

#### MDN Documentation

- **<a href="https://developer.mozilla.org/en-US/" target="_blank">Home</a>**
- **<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" target="_blank">Introduction</a>**
- **<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Arrays</a>**
- **<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank">JavaScript Guide</a>**
- **<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" target="_blank">JavaScript Reference</a>**
- **<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" target="_blank">Re-introduction to JavaScript</a>**

#### Popular Editors

- **<a href="http://www.aptana.com/" target="_blank">Aptana Studio</a>**
- **<a href="http://brackets.io/" target="_blank">Brackets</a>**
- **<a href="http://notepad-plus-plus.org/" target="_blank">Notepad++</a>**
- **<a href="http://www.sublimetext.com/" target="_blank">Sublime Text</a>**
- **<a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>**
- **<a href="http://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a>**

## Basics

### var
	var x = 10;
	var msg = "Hello World!";

### if
	if (x > y) {
		console.writeln("x is greater than y");
	}

### if with an else clause
	if (x > y) {
		console.writeln("x is greater than y");
	} else {
		console.writeln("x is less than y);
	}

### if with else if and else clauses
	if (x > y) {
		console.writeln("x is greater than y");
	} else if (x < y) {
		console.writeln("x is less than y);
	} else {
		console.writeln("x is equal to y");
	}

### while loop
	var x = 0;
	while (x <= 10) {
		console.writeln(x);
		x++;
	}

### do-while loop
	var x = 0;
	do {
		console.writeln(x);
		x++;
	} while ( x <= 10);

### for loop
	for (x = 0; x <= 10; x++) {
		console.writeln(x);
	}

### parseInt, parseFloat
	var dept_no = parseFloat($("dept_no").value);
    var bonus = parseFloat($("bonus").value);

### toFixed
	var total_compensation = year_end_salary + bonus;
    $("total_compensation").value = total_compensation.toFixed(2);

### Date and String objects

A few examples using the Date object.

	var today = new Date();
	console.writeln(today.toDateString());
	console.writeln(today.getFullYear());
	console.writeln(today.getDate());
	console.writeln(today.getMonth());

A few examples using the String object.

	var name = "John Smith";
	var name_lower = name.toLowerCase();		// john smith
	var name_upper = name.toUpperCase();		// JOHN SMITH
	var name_length = name.length;				// 10
	var index = name.indexOf(" ");				// 4
	var first_name = name.substr(0, index);		// John

### Anonymous function
	var $ = function(id) {
		return document.getElementById(id);
	}

	// how to call the function
	var first_name = $("first_name").value;

Another example.

	var addNumbers = function(x, y) {
		return x + y;
	}

	var a = 10;
	var b = 15;
	var total = addNumbers(a, b);

### Named function
	function addNumbers(x, y) {
		return x + y;
	}
	
	var a = 10;
	var b = 15;
	var total = addNumbers(a, b);

Another example.
	function calculateTax = function(sub_total, tax_rate) {
		var tax = sub_total * tax_rate;
		tax = parseFloat(tax.toFixed(2));
		return tax;
	}

	var sub_total = 50;
    var tax_rate = .0975;
    tax_amount = calculateTax(sub_total, tax_rate);

    var total = sub_total + tax_amount;    
    console.info(parseFloat(total.toFixed(2)));

### Arrays
	// creating arrays and assigning values
	var squares = new Array(1, 4, 9, 16, 25, 36, 48, 64, 81, 100);

	var fruits = ["apple", "banana", "cherry", "orange", "pear"];

	// additional ways to create and assign values
	var nums = new Array(3);
	nums[0] = 1;
	nums[1] = 2;
	nums[2] = 3;

	var names = [];
	names[0] = "John";
	names[1] = "Mary";
	names[2] = "Bill";

	// iterating over the contents of an array
	var squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
	for (var i = 0; i < squares.length; i++) {
		console.log("Index " + i + ": " + squares[i]);
	}

	// another method to iterate over the array
	var nums = new Array(1, 2, 3, 4, 5);
	var sum = 0;
	nums.forEach(function(d) {
		console.log(d);	// display the array elements
		sum += d;		// add to sum
	}
	console.log(sum);	// display the sum

### Exception handling
	try {
		var myArray;
		for (var i = 0; i < myArray.length; i++) {
			console.log("Index " + i + ": " + myArray[i]);
		}
	} catch (e) {
		console.log("Error: " + e);
	} finally {
		console.log("Code block executed.");
	}

### for-in loop
	var squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
	for (var i in squares) {
		console.info(squares[i]);
	}

### Document methods
	<script>
		var section = document.getElementById("section");
		var article = document.getElementsByName("article");
		var list = document.getElementById("list");
		var items = list.getElementsByTagName("li");
	</script>
 
	<div id="section">
		<div name="article">
			<ul id="list">
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</ul>
		</div>
	</div>

### Creating objects
	<script>
		var emp = new Object();
		emp.name = "John Smith";
		emp.title = "Programming";
	
		console.log("Name: " + emp.name + ".");
		console.log("Title: " + emp.title + ".");	
	</script>

### Object literal and function
	<script type="text/javascript">
		var emp = {
			name: "John Smith",
			title: "Programmer",
			printLabel: function() {
				console.log("Name: " + emp.name + ".");
				console.log("Title: " + emp.title + ".");
			}
		}
	
		emp.printLabel();
	</script>

### Enumerating the Object's properties
	<script type="text/javascript">
		var obj = {
			name: "apple",
			color: "red",
			type: "delicious",
			printLabel: function() {
				console.log("Name: " + obj.name + ".");
				console.log("Color: " + obj.color + ".");
			}
		}
	
		for (var prop in obj) {
			console.log("Name: " + prop + " Value: " + obj[prop]);
		}
	</script>

### JSON
	var employee = {
		"first_name" : "Bob",
		"last_name"  : "Wilson",
		"department" : "Accounting",
		"job_title"  : "Data Analyst",
		"hire_date"  : "2015-05-15",
		"status"     : 1,
		"updated"    : true
	};
	