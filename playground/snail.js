const snail = (matrix) => {
  let dir = 'right';
  let result = [];

  const goRight = matrix => {
    result = [...result, ...matrix.shift()];
    dir = 'down';
  }

  const goDown = matrix => {
    result = [...result, ...matrix.map(row => row.pop())];
    dir = 'left';
  }

  const goLeft = matrix => {
    result = [...result, ...matrix.pop().reverse()];
    dir = 'up';
  }

  const goUp = matrix => {
    result = [...result, ...matrix.map(row => row.shift()).reverse()];
    dir = 'right';
  }

  while (matrix.length > 0) {
    switch (dir) {
      case 'right': goRight(matrix);
        break;
      case 'down': goDown(matrix);
        break;
      case 'left': goLeft(matrix);
        break;
      case 'up': goUp(matrix);
        break;
    }
  }
  return result;
}