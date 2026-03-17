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
  askQuestion("Where would you like to travel?", [
    {
      text: "Kyoto",
      action: function () {
        kyoto();
      }
    },
    {
      text: "Sakai",
      action: function () {
        sakai();
      }
    },
    {
      text: "Osaka",
      action: function () {
        osaka();
      }
    },
    {
      text: "Nara",
      action: function () {
        nara();
      }
    },
    {
      text: "Odawara",
      action: function () {
        odawara();
      }
    },
    {
      text: "Yamaguchi",
      action: function () {
        yamaguchi();
      }
    }
  ]);
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
function sakai() {
  image("images/sakai.jpeg");
  print("You arrive in Sakai.");
  askQuestion("What would you like to do in Sakai?", [
    {
      text: "fight",
      action: function () {
        fight();
      }
    },
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
      text: "search",
      action: function () {
        search();
      }
    }
  ]);
}
function osaka() {
  image("images/osaka.jpeg");
  print("You arrive in Osaka.");
  askQuestion("What would you like to do in Osaka?", [
    {
      text: "fight",
      action: function () {
        fight();
      }
    },
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
      text: "search",
      action: function () {
        search();
      }
    }
  ]);
}
function nara() {
  image("images/nara.jpeg");
  print("You arrive in Nara.");
  askQuestion("What would you like to do in Nara?", [
    {
      text: "fight",
      action: function () {
        fight();
      }
    },
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
      text: "search",
      action: function () {
        search();
      }
    }
  ]);
}
function odawara() {
  image("images/odawara.jpeg");
  print("You arrive in Odawara.");
  askQuestion("What would you like to do in Odawara?", [
    {
      text: "fight",
      action: function () {
        fight();
      }
    },
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
      text: "search",
      action: function () {
        search();
      }
    }
  ]);
}
function yamaguchi() {
  image("images/yamaguchi.jpeg");
  print("You arrive in Yamaguchi.");
  askQuestion("What would you like to do in Yamaguchi?", [
    {
      text: "fight",
      action: function () {
        fight();
      }
    },
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
      text: "search",
      action: function () {
        search();
      }
    }
  ]);
}
start();
