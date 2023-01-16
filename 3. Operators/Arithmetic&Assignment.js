/*
  Arithmetic Expression is a combination of...
  Operands (values, variables, etc.)
  Operators (+ - * / %)
  thatcan evaluated to a value
  Ex - a = b + 10;
*/
let a = 3;
let b = 4;

// Basic
console.log("The Value of 3 + 4 is", a + b); // Addition
console.log("The Value of 3 - 4 is", a - b); // Substraction
console.log("The Value of 3 * 4 is", a * b); // Multiplication
console.log("The Value of 3 / 4 is", a / b); // Division

// SHORTCUTS:- (Assignment Operators)
let students = 69;

students += 1;
students -= 1;
students *= 2;
students /= 2;

console.log(students);
// Advanced
// Modulus (Gives the reminder)
console.log("The Value of 20 % 3 is", 20 % 3);

// Option 1.
// Exponentiation (Square of a No.) 2 * 2
console.log(4 ** 2);

// Option 2.
// Exponentiation (Cube of a No.) 3 * 3 * 3
console.log(6 ** 3);

// Floor Division (Gives Output in only in Integer and Not in Floating Point)
console.log(Math.floor(31 / 3));

// Round off
console.log(Math.round(6.9));
console.log(Math.round(6.5));
console.log(Math.round(6.3));
