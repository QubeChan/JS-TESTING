//Create a function named findMax which accepts one parameter: an array of numbers.
let arr = [110, 10, 20, 1, 9, 0, 35, 9, 102]

function findMax(arr) {
  let biggestNum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]  && arr[i] > biggestNum) {
      biggestNum = arr[i];
    }
  }
  console.log(biggestNum);
}

findMax(arr);
