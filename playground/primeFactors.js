const listPrimesToNum = num => {
  const primes = [], sieve = [];
  for (let i = 2; i <= num; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i * 2; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

const getPrimeFactorsArr = num => {
  const factors = [];
  const primes = listPrimesToNum(num);
  let ind = 0;
  while (num > 1) {
    if (num % primes[ind] === 0) {
      factors.push(primes[ind]);
      num /= primes[ind];
    }
    else ind++;
  }
  return factors;
}

const primeFactors = (n) => {
  const factors = getPrimeFactorsArr(n);
  const filteredFactors = [...new Set(factors)];
  const powers = filteredFactors.map(filtered => factors.filter(factor => factor === filtered).length);
  const stringResult = filteredFactors
    .map((filtered, i) => powers[i] === 1 ? `(${filtered})` : `(${filtered}**${powers[i]})`)
    .join('');
  return stringResult;
}

console.log(primeFactors(86400))
