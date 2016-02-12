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