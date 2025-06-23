export function capitalize(string) {
  if (!string) {
    return undefined;
  }
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function reverse(string) {
  if (!string) {
    return undefined;
  }
  return string.split("").reverse().join("");
}

export function calculator(num1, num2, command) {
  switch (command) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num1 === 0 || num2 === 0) {
        return "Nooooo!Don't divide by 0!";
      }
      return num1 / num2;
    default:
      return undefined;
  }
}

export function caesarCipher(string, amount) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    // const upper = /[A-Z]/;
    // const lower = /[a-z]/;
    const letter = /[a-z]|[A-Z]/;
    let char = string.charAt(i);
    if (char.match(letter)) {
      char = getChar(char.charCodeAt() + 3);
    }
    // if (char.match(lower)) {
    //   char = shiftLower(char.charCodeAt() + 3);
    // }
    result += char;
  }
  return result;
}

// old version with seperate functions for lower and uppercase letters
// function shiftLower(charcode) {
//   const min = 96;
//   const max = 122;
//   if (charcode > 122) {
//     charcode = charcode - max + min;
//   }
//   return String.fromCharCode(charcode);
// }
// function shiftUpper(charcode) {
//   const max = 90;
//   const min = 64;
//   if (charcode > 90) {
//     charcode = charcode - max + min;
//   }
//   return String.fromCharCode(charcode);
// }

//combined version
function getChar(charcode) {
  if (charcode > 122) {
    charcode = charcode - 122 + 96;
  }
  if (charcode > 90 && charcode < 97) {
    charcode = charcode - 90 + 64;
  }
  return String.fromCharCode(charcode);
}

export function analyzeArray(array) {
  let min;
  let max;
  let sum = 0;
  const length = array.length;
  array.forEach((num) => {
    if (num < min || !min) {
      min = num;
    }
    if (num > max || !max) {
      max = num;
    }
    sum += num;
  });
  return { average: sum / length, min, max, length };
}
