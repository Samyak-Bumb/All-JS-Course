// Hypo of Triangle

let a,
  b,
  c;

// a = prompt("Enter side A")
// a = Number(a);

// b = prompt("Enter side b")
// b = Number(b);

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);

// document.write(c);
// console.log(c);

document.getElementById("myBtn").onclick = function () {
  a = document.getElementById("aTB").value;
  a = Number(a);

  b = document.getElementById("bTB").value;
  b = Number(b);

  c = Math.pow(a, 2) + Math.pow(b, 2);
  c = Math.sqrt(c);

  document.getElementById("cLbl").innerHTML = "Side C = " + c;
}
