const interleave = (arrayList) => {
  const numOfArrs = arrayList.length;
  const highestLength = arrayList.map(arr => arr.length).reduce((a, c) => c > a ? c : a);
  const result = [];
  for (let i = 0; i < numOfArrs; i++) {
    for (let j = 0; j < highestLength; j++) {
      result.push(arrayList[i][j] ? arrayList[i][j] : null);
    }
  }
  return result;
}
