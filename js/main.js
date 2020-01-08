const subBut = document.getElementById("submit");
let resetBut = document.getElementById("reset");
let input1 = document.getElementById("no1");
let input2 = document.getElementById("no2");
let answer = document.getElementById("newText");


subBut.addEventListener("click", () => {
  answer.innerHTML = input1.value + " " + input2.value;
});

resetBut.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  answer.textContent = "";
});