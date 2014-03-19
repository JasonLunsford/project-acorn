(function() {

	// Create container DIV and P
	var container = document.createElement("div");
	var myText = document.createElement("p");

	// Grab first child of Body
	var firstElement = document.body.firstChild;

	// Get width of window and concat with "px"
	var windowSize = getWidth();
	var myTextContent = document.createTextNode(windowSize+"px");

	// Style DIV
	container.style["backgroundColor"] = "orange";
	container.style["height"] = "20px";
	container.style["lineHeight"] = "20px";
	container.style["textAlign"] = "center";
	container.style["margin"] = "0px";

	// Style P
	myText.style["color"] = "blue";
	myText.style["fontSize"] = "12px";
	myText.style["margin"] = "0px";
	myText.style["padding"] = "0px";

	// Build markup, insert into body in front of existing first child
	container.appendChild(myText);
	myText.appendChild(myTextContent);
	document.body.insertBefore(container, firstElement);

	// Update measure on window resize
	window.addEventListener('resize', function(event){
		myText.firstChild.data = getWidth()+"px";
	});

	function getWidth() {
	    if (self.innerWidth) {
	    	// returns width of element including scrollbar
	    	return self.innerWidth;
	    }
	    return 0;
	}
	
})();