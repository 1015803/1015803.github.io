//core functions that do important stuff
function image(imageFile) {
	document.getElementById("image").src = imageFile;
}
function print(text) {
	document.getElementById("output").innerHTML += "<br>" + text ;
}
function clearChoices() {
	document.getElementById("choices").innerHTML = "";
}
function showChoices(options) {
  let choicesDiv = document.getElementById("choices");
  clearChoices();
  for (let i = 0; i < options.length; i++) {
    let button = document.createElement("button");
    button.textContent = options[i].text;
    button.onclick = options[i].action;
    choicesDiv.appendChild(button);
  }
}
function askQuestion(question, options) {
  print("");
  print(question);
  showChoices(options);
}
//start
function start(){
	print("We have been waiting for, you see our country has been taken over by the ruthless war lord Oda Nobunaga");
	print("We need your help to take our country back!");
	kyoto();
}
//actions
function travel() {
	print ("travel");
}
function train() {
	print ("train");
}
function fight() {
	print ("fight");
}
function search() {
	print ("search");
}
//locations
function kyoto() {
	image("images/kyoto.jpeg");
	print("Hello Samuri, welcome to Kyoto!");
	print("Theres lots of things to do, but first be careful dont go to Honno-ji temple unless you ready to take on Lord Nobunaga");
  	askQuestion("What would you like to do first", [
    		{
      			text: "train",
      			action: function () {
        			train();
			}
      		},
		{
                	text: "travel",
			action: function () { 
				travel();
                	}
		},
		{                                                               
	                text: "fight",                                                  
        	        action: function () {
				fight();                                                
			}
		},
		{                                                               
              	   text: "search",                                                  
              	   action: function () {
				 search();
		   }
		}
  	]);
}
start();
