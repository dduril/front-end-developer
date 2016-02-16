# jQuery

- **<a href="https://jquery.com/" target="_blank">jQuery</a>**
- **<a href="http://jqueryui.com/" target="_blank">jQuery UI</a>**

## Getting Started

### Document.ready

	<script type="text/javascript">
		$(document).ready(function() {
			// jQuery code goes here
		});
	</script

### jQuery selectors

	// by element type
	$("a")

	// by id
	$("#container")

	// by class
	$(".article")

	// descendents
	$("#container p")

### jQuery methods - val(), text(), focus()

	var first_name = $("#first_name").val();
	$(#last_name").text("Smith");
	$("#email_address").focus();

### Putting it all together
	<script type="text/javascript">
		$(document).ready(function() {
			$("h1").click(function) {
				alert("Main header has been clicked.");
			}
		});
	</script