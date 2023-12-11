// Add function
function add(number1, number2) {
  // Check if inputs are NaN or undefined and return NaN if yes
  if (Number.isNaN(number1) || Number.isNaN(number2) || number1 === undefined || number2 === undefined) {
    return NaN;
  }

  // Check if inputs are numbers
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new TypeError(`Invalid input: both inputs must be numbers`);
  }

  return number1 + number2;
}

exports.add = add;
