// Get all of the top level comments
let allComments = document.getElementsByClassName("sitetable nestedlisting");
let comments = allComments[0].childNodes;
console.log(comments);

// find the location, make 2 buttons, and link to listeners
let menuarea = document.getElementsByClassName("menuarea");

let button1 = document.createElement("button");
button1.innerHTML = "1";
menuarea[0].appendChild(button1);
button1.addEventListener("click", function(){
	if (comments[0].style.display == 'none') {
		console.log("OFF");
		comments[0].style.display = '';
	}
	else {
		console.log("ON");
		comments[0].style.display = 'none';
	}
});

let button2 = document.createElement("button");
button2.innerHTML = "2";
menuarea[0].appendChild(button2);
button2.addEventListener("click", function(){
	if (comments[2].style.display == 'none') {
		console.log("OFF");
		comments[2].style.display = '';
	}
	else {
		console.log("ON");
		comments[2].style.display = 'none';
	}
});

let button3 = document.createElement("button");
button3.innerHTML = "3";
menuarea[0].appendChild(button3);
button3.addEventListener("click", function(){
	if (comments[4].style.display == 'none') {
		console.log("OFF");
		comments[4].style.display = '';
	}
	else {
		console.log("ON");
		comments[4].style.display = 'none';
	}
});

let button4 = document.createElement("button");
button4.innerHTML = "4";
menuarea[0].appendChild(button4);
button4.addEventListener("click", function(){
	if (comments[6].style.display == 'none') {
		console.log("OFF");
		comments[6].style.display = '';
	}
	else {
		console.log("ON");
		comments[6].style.display = 'none';
	}
});

let button5 = document.createElement("button");
button5.innerHTML = "5";
menuarea[0].appendChild(button5);
button5.addEventListener("click", function(){
	if (comments[8].style.display == 'none') {
		console.log("OFF");
		comments[8].style.display = '';
	}
	else {
		console.log("ON");
		comments[8].style.display = 'none';
	}
});

for (let i = 0; i < comments.length-1; i++) {
	comments[i].style.display = 'none';
}


function hide() {
	console.log("Test")
	if (comments[0].style.display == 'none') {
		console.log("OFF");
		comments[0].style.display = '';
	}
	else {
		console.log("ON");
		comments[0].style.display = 'none';
	}
}



/*// Get all other comments and hide them
let siteTable = document.getElementsByClassName("sitetable nestedlisting");
allComments[0].style.display = 'none';
*/
