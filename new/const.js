// const = A var that can't be changed

const pi = 3.14;

let radius,
  circum;

radius = prompt("Enter the radius of circle");
radius = Number(radius);

circum = 2 * pi * radius;

document.write(circum);
console.log(circum);
