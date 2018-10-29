// fibonacci();
// addEven(0,20);
//
// function fibonacci() {
//   // enter your code here
//   let fibonacci = [0, 1];
//   let i = 2;
//   while (i < 100) {
//     if (i != 0) {
//       fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//       console.log(fibonacci);
//       i++;
//     }
//   }
//   // for (let i = 2; i < 100; i++) {
//   //   if (i != 0) {
//   //     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//   //     console.log(fibonacci);
//   //   }
//   // }
// }
//
// function addEven(x, y) {
//   let result = 0;
//   for (let i = x; i <= y; i++) {
//     if (i % 2 === 0) {
//       console.log((result += i));
//     }
//   }
// }

function dnd(x) {
  switch (x) {
    case 4:
      for (let i = 0; i < 10; i++) {
        console.log(Math.floor(Math.random(x) * 4) + 1);
      }
      break;

    case 6:
      for (let i = 0; i < 3; i++) {
        console.log(Math.floor(Math.random(x) * 6) + 1);
      }
      break;

    case 20:
      let roll = Math.floor(Math.random(x) * 20) + 1
      console.log(roll);
      switch (roll) {
        case 1:
          console.log(`You rolled a ${roll} you fail`);
          break;
        case 20:
          console.log(`You rolled a ${roll} you crit`);
          break;
        default:
          console.log(`You rolled a ${roll}`);

      }
      break;
    default:

  }

}
// dnd(prompt(`Enter a number: 4, 6, 20`));
dnd(4);
