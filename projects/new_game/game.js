//core functions that do important stuff
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
function scene1() {
  askQuestion("Question 1", [
    {
      text: "A",
      action: function () {
        scene2();
      }
    }
  ]);
}
function scene2() {
  askQuestion("Question 2", [
    {
      text: "B",
      action: function () {
        scene3();
      }
    }
  ]);
}
function scene3() {
  askQuestion("Question 3", [
    {
      text: "C",
      action: function () {
        print("End.");
      }
    }
  ]);
}
scene1();
