const getDivisors = num => {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
}

const getSumOfSquares = numArr => numArr.reduce((acc, curr) => acc + curr ** 2, 0);

const decideIfSquareNum = num => num ** .5 === Math.floor(num ** .5) ? true : false;

const listSquared = (m, n) => {
  const tuples = [];
  for (let i = m; i <= n; i++) {
    const divisors = getDivisors(i);
    const sumOfSquares = getSumOfSquares(divisors);
    if (decideIfSquareNum(sumOfSquares)) tuples.push([i, sumOfSquares]);
  }
  return tuples;
}


console.log(getDivisors(42))