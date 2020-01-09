const subBut = document.getElementById("submit");
let resetBut = document.getElementById("reset");
let input1 = document.getElementById("no1");
//let input2 = document.getElementById("no2");
let answer = document.getElementById("newText");
let verbArr = ["Running", "Shouting", "Laughing", "Playing", "Humping", "Jogging", "Inconsiderate", "Demeaning", "Menacing", "All-embracing"];
let placesArr = ["Shack", "Grillhouse", "Deli", "Shed", "Cafe", "Steakhouse", "Brewery", "Watering-hole", "Brasserie", "Shop", "Saloon", "Bar"]


subBut.addEventListener("click", () => {
  if (input1.value === "") {
    answer.textContent = "Please enter your name!";
  } else {
  answer.textContent = `${input1.value}'s ${verbArr[Math.floor(Math.random() * verbArr.length)]} ${placesArr[Math.floor(Math.random() * placesArr.length)]}`;
  }
});

resetBut.addEventListener("click", () => {
  input1.value = "";
  answer.textContent = "";
});