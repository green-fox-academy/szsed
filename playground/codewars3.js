const josephusSurvivor = (n, k) => {
  const numArr = [];
  for (let i = 1; i <= n; i++) numArr.push(i);
  let index = 0;
  while (numArr.length > 1) {
    index = (index - 1 + k) % numArr.length;
    numArr.splice(index, 1);
  }
  return numArr[0];
}

console.log(josephusSurvivor(7, 3))