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


// //CODE-ALONG: Rolling Dice
// function rollDice() {
//   return console.log(Math.floor(Math.random() * prompt("Enter a number from 4-21")) + 1);
// }
// rollDice();

// //CODE-ALONG: Defining Functions
// function addTwoNumbers(firstNum, secondNum) {
//   return console.log(firstNum + secondNum);
// }
// addTwoNumbers(1,2);

// let qube = [10, 20, 30];
// qube.push(10);
// console.log(qube);
// qube.pop();
// console.log(qube);
// qube.unshift(10);
// console.log(qube);
// qube.shift();
// console.log(qube);

// let team1=[];
// let team2=[];
// let friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];
// for (var i = 0; i < friends.length; i++) {
//   if (i % 2 == 0) {
//     // if the index is even, add the person to team 1
//     team1.unshift(friends[i]);
//     console.log(`team1: ${team1}`);
//   } else {
//     // otherwise add them to team 2
//     team2.unshift(friends[i]);
//     console.log(`team2: ${team2}`);
//   }
//   console.log(friends[i]);
// }

let fruits = ["kiwi", "rambutan", "mango", "tomato"];
console.log(fruits);
console.log(`${fruits.pop()} is taken out from the back of the array using .pop()`);
console.log(`${fruits} remains in the array`);
console.log(`"gooseberry" is the ${fruits.push("gooseberry")} item added at the end of the array using .push()`);
console.log(`${fruits} remains in the array`);
console.log(`${fruits.shift()} is taken out from the front of the array using .shift()`);
console.log(`${fruits} remains in the array`);
console.log(`"banana" is the ${fruits.unshift("banana")} item added to the front of the array using .unshift()`);
console.log(`${fruits} remains in the array`);
console.log(`${fruits.slice(0,2)} is what is displayed when using fruits.slice(0,2) to get 2 items out starting from the 1st index starting at position 0`);
console.log(fruits);
console.log(`${fruits.splice(0,2)} is what is taken out from the array. fruits.splice(0,2) takes 2 items out starting from the 1st index starting at position 0 and leaves ${fruits} left in the array)`);
console.log(`${fruits} is left in the array`);
console.log(`${fruits[fruits.length] = "pineapple"} is added to the end of the fruits[]`);
console.log(`${fruits} is what the array now holds`);
console.log(`${fruits[5] = "dragonfruit"} is now added to the 5th index of fruits[]`);
console.log(`${fruits} is what the array now holds. the 3rd and 4th index now holds undefined`);
