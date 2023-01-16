// Simple Way To Print User Input

let userName = prompt("What's your Name");
// OR //
// let userName = window.prompt("What's your Name");

console.log(userName);

// Advanced Way To Print User Input

var usrNme;

document.getElementById("myBtn").onclick = function () {
  usrNme = document.getElementById("myTxt").value;
  console.log(usrNme);
}
