class Character {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}
// core functions
function image(imageFile) {
  document.getElementById("image").src = imageFile;
}
function print(text) {
  document.getElementById("output").innerHTML += "<br>" + text;
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
// game variables
let player = new Character("Samurai", 5);
let currentCity = "";
let days = 0;
// start
function start() {
  print("We have been waiting for you.");
  print("Our country has been taken over by the ruthless war lord Oda Nobunaga.");
  print("We need your help to take our country back!");
  kyoto();
}
function win(){
	print ("Congradulations you defeated Lord Nobunaga in " + days + " days!");
}
	// actions
function travel() {
        days += 1;
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
  days += 1;
  player.power = player.power + 1;
  print("You train");
  print("Your power is now " + player.power + ".");
  goBackToCity();
}
function search() {
  days += 1;
  print("You search " + currentCity + " carefully.");
  goBackToCity();
}
function fight() {
  days += 1;
  if (currentCity === "Kyoto") {
    startFight("Samurai", 6);
  } else if (currentCity === "Sakai") {
    startFight("Bandit", 5);
  } else if (currentCity === "Osaka") {
    startFight("Ninja", 7);
  } else if (currentCity === "Nara") {
    startFight("Samurai", 8);
  } else if (currentCity === "Odawara") {
    startFight("Samurai Daimyo", 9);
  } else if (currentCity === "Yamaguchi") {
    startFight("Yasuke", 10);
  }
}
// combat
function startFight(enemyName, enemyPower) {
  enemy = new Character(enemyName, enemyPower);
  print("You are challenged by " + enemy.name );
  print("Your power: " + player.power);
  print(enemy.name + " power: " + enemy.power);
     if (player.power > enemy.power) {                                             
     print("You defeated " + enemy.name + "!");                                  
     player.power = player.power + 2;                                            
     print("Your power increased to " + player.power + ".");                     
     clearChoices();                                                             
     goBackToCity();                                                             
   } else {                                                                      
     print(enemy.name + " is stronger than you.");                               
     print("You were defeated.");                                                
     clearChoices();                                                                                                                                              
     askQuestion("Game over. What would you like to do?", [                      
     {                                                                         
         text: "restart",                                                        
         action: function () {                                                   
           restartGame();                                                        
         }                                                                       
       }                                                                         
     ]);                                                                         
   } 
}
// final fight
function honnoji() {
  image("images/honnoji.jpeg");
  print("You arrive at Honno-ji Temple.");
  print("Oda Nobunaga awaits you.");
  askQuestion("What would you like to do at Honno-ji?", [
    {
      text: "fight Nobunaga",
      action: function () {
        if (player.power > 12){
		win();
	}
      }
    },
    {
      text: "leave",
      action: function () {
        kyoto();
      }
    }
  ]);
}
// after giht/train
function goBackToCity() {
  if (currentCity === "Kyoto") {
    kyoto();
  } else if (currentCity === "Sakai") {
    sakai();
  } else if (currentCity === "Osaka") {
    osaka();
  } else if (currentCity === "Nara") {
    nara();
  } else if (currentCity === "Odawara") {
    odawara();
  } else if (currentCity === "Yamaguchi") {
    yamaguchi();
  }
}
function restartGame() {
  document.getElementById("output").innerHTML = "";
  clearChoices();
  player = new Character("Samurai", 5);
  enemy = null;
  currentCity = "";
  start();
}
// locations
function kyoto() {
  currentCity = "Kyoto";
  image("images/kyoto.jpeg");
  print("Hello Samurai, welcome to Kyoto!");
  print("There is lots to do here, but be careful. Do not go to Honno-ji temple unless you are ready to take on Lord Nobunaga.");
  askQuestion("What would you like to do in Kyoto?", [
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
    },
    {
      text: "visit Honno-ji temple",
      action: function () {
        honnoji();
      }
    }
  ]);
}
function sakai() {
  currentCity = "Sakai";
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
  currentCity = "Osaka";
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
  currentCity = "Nara";
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
  currentCity = "Odawara";
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
  currentCity = "Yamaguchi";
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
