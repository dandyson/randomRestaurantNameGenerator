let newTextDiv = document.getElementById("newTextDiv");
const subBut = document.getElementById("submit");
let resetBut = document.getElementById("reset");
let input1 = document.getElementById("no1");;
let name = document.getElementById("name");
let verb = document.getElementById("verb");
let noun = document.getElementById("noun");

//ARRAYS
let verbArr = ["Fabulous", "Tasty-Ass", "Run-Down", "Nice-Smelling", "Crap", "Excellent", "One-Of-A-Kind", "Smelly", "Fish-Smelling", "Laughing", "Hilarious", "Inconsiderate", "Demeaning", "Menacing", "All-embracing", "Delightful", " Incredible", "Fantastic", "Unforgettable"];
let placesArr = ["Shack", "Grillhouse", "Deli", "Shed", "Cafe", "Steakhouse", "Brewery", "Watering-hole", "Brasserie", "Shop", "Saloon", "Bar", "Pub", "Take-Away", "Restaurant", "Clubhouse"];


//FUNCTIONS
const newElement = () => {
  //Create 2 new buttons
  var changeButton1 = document.createElement('button');
  var changeButton2 = document.createElement('button');
  //Apply ids to buttons for styling
  changeButton1.id = "changeButton1";
  changeButton2.id = "changeButton2";
  //Add bootstrap button classes
  changeButton1.classList.add("btn");
  changeButton1.classList.add("btn-primary");
  changeButton2.classList.add("btn");
  changeButton2.classList.add("btn-warning");
  //Change innerHTML
  changeButton1.innerHTML = 'Change Verb';
  changeButton2.innerHTML = 'Change Place Name';
  //Add the 2 new buttons to answerTextDiv
  amendButtonDiv.appendChild(changeButton1);
  amendButtonDiv.appendChild(changeButton2);
  //addEventListener for click on both new buttons
  changeButton1.addEventListener("click", () => {
    verb.textContent = verbArr[Math.floor(Math.random() * verbArr.length)];
  })
  changeButton2.addEventListener("click", () => {
    noun.textContent = placesArr[Math.floor(Math.random() * placesArr.length)];
  })
  //If the user clicks the submit button again, hide new buttons
  subBut.addEventListener("click", () => {
    changeButton1.style.display = "none";
    changeButton2.style.display = "none";

  });
  //If the user clicks the reset button, hide new buttons along with all text
  resetBut.addEventListener("click", () => {
    input1.value = "";
    name.textContent = "";
    verb.textContent = "";
    noun.textContent = "";
    changeButton1.style.display = "none";
    changeButton2.style.display = "none";
  });
}
 

//When Submit button is clicked, run the following
subBut.addEventListener("click", () => {
  if (input1.value === "") {
    name.textContent = "";
    verb.textContent = "";
    noun.textContent = "";
    errorText.textContent = "Please enter your name!";
    errorText.style.color = "red";
  } else {
    newElement();
    name.textContent = `${input1.value}'s`;
    //Select a random string from the arrays
    verb.textContent = verbArr[Math.floor(Math.random() * verbArr.length)];
    noun.textContent = placesArr[Math.floor(Math.random() * placesArr.length)];
    }
});

//When reset button is clicked, run the following
resetBut.addEventListener("click", () => {
  name.textContent = "";
  verb.textContent = "";
  noun.textContent = "";
  errorText.textContent = "";  
});