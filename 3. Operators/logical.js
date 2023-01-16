// Logical Operators
let
  a = 35,
  b = 12;

// Returns TRUE if ** both ** statements are true
console.log("The Value of a and b is", (a > 30 && b > 10));

// Returns TRUE if ** one ** statements are true
console.log("The Value of a or b is", (a < 100 || b > 13));
console.log("The Value of a or b is", (a > 100 || b > 13));

// ** Revesre ** the result if the result is true or false
console.log("b's Value is not", (!b));
