let x = 5.48,
  y1 = 564,
  y2 = 9578,
  z1 = 4,
  z2 = -5.48,
  max,
  min;

a = Math.round(x);
b = Math.floor(x);
c = Math.ceil(x);
d = Math.pow(x, 3);
e = Math.sqrt(z1);
f = Math.abs(z2);
g = Math.PI;// Built-In Pie Function

max = Math.max(z2, y1, y2);
min = Math.min(z2, y1, y2);

console.log("Round fuc. - ", a);
console.log("Floor func. - ", b);
console.log("Ceil func. - ", c);
console.log("Power func. - ", d);
console.log("Square Root func. - ", e);
console.log("Absolute func. - ", f);
console.log("---");
console.log(max);
console.log(min);
console.log("The Fucking Value of Pi is - ", g);
