var oldTime = new Date();
var counter = 0;
var max = 0;

function display(){
	var currentTime = new Date();
	var timeDifference = currentTime.getTime() - oldTime.getTime() 
	document.getElementById('time').innerHTML = timeDifference/1000;
	document.getElementById('cat_number').innerHTML =  counter;
	setMax(counter);
	document.getElementById('highest_number').innerHTML = max;
}

function increment(){
	counter++;
}

function setMax(counter){
	if (counter > max){
		max = counter;
	}
}

















