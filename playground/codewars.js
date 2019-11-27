const getMaxAbs = (numList) => numList
  .map(e => Math.abs(e))
  .reduce((a, c) => c > a ? c : a);

const getBoolPrime = (num) => {
  for (let i = 2; i <= Math.abs(num) ** 0.5; i++) {
    if (num / i === Math.floor(num / i)) return false;
  }
  return true;
}

const listPrimesToMax = (max) => {
  const numList = [];
  for (let i = 2; i <= max; i++) {
    numList.push(i);
  }
  return numList.filter(e => getBoolPrime(e));
}

const getBoolDivisor = (num, prime) => num / prime === Math.floor(num / prime);

const sumOfDivided = (numList) => {
  if (!numList.length) return [];

  const primeList = listPrimesToMax(getMaxAbs(numList));
  return primeList.map(prime => {
    let hasDividend = numList.some(e => getBoolDivisor(e, prime))
    if (!hasDividend) return null;
    let sum = numList.filter(e => getBoolDivisor(e, prime)).reduce((a, c) => a + c)
    return [prime, sum];
  }).filter(e => e !== null);
}


// console.log(getMaxAbs([15, 30, 45]))
// console.log(getBoolPrime(19))
// console.log(getBoolPrime(20))
console.log(sumOfDivided([15, 21, 24, 30, 45]))