
console.log('Hi');


let trigger = document.getElementById('darkmodeTrigger');

trigger.addEventListener('click', function(){
	console.log('darkmode button clicked!');
	document.body.classList.toggle('darkmode');
});

// function functionName(){

// }