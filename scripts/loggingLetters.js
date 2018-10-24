// let n = 25;
// let result = 0;
// let sum = 0;

//CODE-ALONG: Logging Letters
// let sentence = "I love learning software development";
//
// for (let i=0; i < sentence.length; i++) {
//   console.log(i);
//      if(sentence[i] !== " "){
//       console.log(sentence[i]);
//      }
// }

//CODE PRACTICE: if Statements
// if (n % 2 === 0) {
//   console.log(result += 10);
// }
// else if (n % 2 !== 0){
//   console.log(result -= n);
// }

//CODE PRACTICE: for Loops
// for (let i = 0; i < n; i++) {
//   sum+=n
//   console.log(`${i} and ${sum}`);
// }

// n = "Do you like cake?"
// n = confirm(n);
// if (n) {
//   result = prompt("What is your favorite cake?");
//   alert(`Your favorite cake is ${result}`);
// } else {
//   n = "What is your favorite band?";
//   // prompt(n); // "Your favorite band is What is your favorite band?""
//   n = prompt(n); // When using n = prompt(n); it returns "Your favorite band is (what ever user inputed or null if user pressed cancel)""
//   alert(`Your favorite band is ${n} band`); // Only returns back up to ${n} "cake" is not displayed
// }
// alert(`Your favorite band is ${n} cake`); // "Your favorite band is true cake"

// //CODE-ALONG: Counting Characters
// function countingCharacters(inputString) {
//   let stringToCount = inputString.length;
//   console.log(stringToCount);
//   alert(`The amount of characters in "${inputString}" is ${stringToCount}`);
// }
// countingCharacters(prompt("Enter a string."));
//
// function countingCharacters2(inputString, characterToFind) {
//   let charCount = 0;
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] === characterToFind) {
//       charCount++;
//     }
//   }
//   alert(`The character "${characterToFind}" appears ${charCount} times in the string "inputString"`);
// }
// countingCharacters2(prompt(`Enter a string`), prompt(`Enter one character`));
//
// function countingCharacters3(str, search) {
//   let searchCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.substring(i, i + search.length) === search) {
//       searchCount++;
//     }
//   }
//   alert(`${search} comes out ${searchCount} times in the string ${str}`);
//   return searchCount;
// }
// console.log(countingCharacters3(prompt(`Enter a string`), prompt(`Enter a search`)));
