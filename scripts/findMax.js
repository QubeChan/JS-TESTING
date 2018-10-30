//Create a function named findMax which accepts one parameter: an array of numbers.
let arr = [110, 10, 20, 1, 9, 100, 35, 9, 105]

function findMax(arr) {
  let biggestNum = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      biggestNum = arr[i];
    }
  }
  if (arr[0] > biggestNum) {
    biggestNum = arr[0];
  }
  console.log(biggestNum);
}

findMax(arr);
