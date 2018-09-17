// get radio inputs
var radioInputs = document.getElementsByTagName('input');

// get labels for tabs and accordions and turn to array
var labels = [].slice.call(document.getElementsByTagName('label'));

// common index number shared by elements that belong together
var commonIndex = 0;

// get the divs where the content will be added
var contentDivs = document.getElementsByTagName('div');


// find out which radio is checked and call ajax function
for (var i = 0; i < radioInputs.length; i++) {
	if(radioInputs[i].checked === true) {
		commonIndex = i;
		doAjax();
	}
};


// loop through labels and check which one is clicked
labels.forEach(function (element, i){
	labels[i].addEventListener("click", function checkClicked(){
		// get the display number of the tab or accordion and reduce by one to get its index number
		commonIndex = labels[i].htmlFor.slice(-1) - 1;
		doAjax();
		// request content only the first time a tab gets activated
		labels[i].removeEventListener("click", checkClicked);
	});
});


// ajax function to get the content
function doAjax(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var content = JSON.parse(xhr.responseText);
				addContent(content);				
			}
		};
		xhr.open("GET", "../content/lipsum.json", true);
		xhr.send(null);
};


// add the content with some HTML to the divs
function addContent(toAdd) {
	contentDivs[commonIndex].innerHTML = "<h1>" + toAdd[commonIndex].heading + "</h1>" + "<p>" + toAdd[commonIndex].text + "</p>";
};