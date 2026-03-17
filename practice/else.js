console.log("test");
function addToBody(text){
	document.body.innerHTML += "<p>" + text + "</p>";
}
/*
let yourName= = prompt("What is your name?");
addToBody("Hi "+youtName);
*/
let temperature = prompt("What is the temprature outside?");
temperature = Number(temperature);
addToBody("It's " + temperature +" degrees");
if (temperature < 32){
	addToBody("It's freezing");
}else if (temperature > 80){
	addToBody("Go to the beach");
}else{
	addToBody("go for walk");
}
addToBody("have a nice day");
