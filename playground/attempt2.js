// const highestEven = numbersArray => {
//   let max = -Infinity;
//   let foundEven = false;

//   for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 2 === 0 && numbersArray[i] > max) {
//       max = numbersArray[i];
//       foundEven = true;
//     }
//   }
//   return foundEven ? max : 0;
// }

const highestEven = numbersArray => {
  const evens = numbersArray.filter(e => e % 2 === 0);
  return evens.length === 0 ? 0 : evens.reduce((a, c) => c > a ? c : a);
}

console.log(highestEven([1, 2, 3]));
console.log(highestEven([1, 3, 5, 7]));
console.log(highestEven([]));
console.log(highestEven([-8, -5, -3, -6, -2]));
