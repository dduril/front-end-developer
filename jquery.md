# jQuery

- **<a href="https://jquery.com/" target="_blank">jQuery</a>**
- **<a href="http://jqueryui.com/" target="_blank">jQuery UI</a>**

## Getting Started

### Include the jQuery library

**By CDN**

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

**By local reference**

	<script src="/assets/libs/jquery/1.12.0/jquery.min.js"></script>

### Document.ready

	<script type="text/javascript">
		$(document).ready(function() {
			// jQuery code goes here
		});
	</script

### jQuery selectors

	<!-- HTML snippet for example -->
	.
	.
	<div id="container">
        <p>First paragraph.</p>
        
        <div class="frameworks">
            <div>Angular</div>
            <div>Backbone</div>
            <div>Ember</div>
            <div>React</div>
        </div>
        
        <p>Second paragraph.</p>
    </div>
	.
	.
	<script type="text/javascript">
		$(document).ready(function() {
			var container = $("#container").text();
			console.log(container);
	
			var frameworks = $(".frameworks").text();
			console.log(frameworks);
	
			var p = $("p").text();
			console.log(p);
	
			var p2 = $("#container p:eq(1)").text();
			console.log(p2);  
		});
	</script

### jQuery methods - val(), text(), focus()

	var first_name = $("#first_name").val();
	$(#last_name").text("Smith");
	$("#email_address").focus();

### jQuery click example
	<script type="text/javascript">
		$(document).ready(function() {
			$("h2").click(function() {
            	console.log("h2 clicked.");
        	});
		});
	</script