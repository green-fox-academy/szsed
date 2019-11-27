const dirSwitchA = dir => {
  switch (dir) {
    case 'north': return 'west';
    case 'east': return 'south';
    case 'south': return 'east';
    case 'west': return 'north';
  }
}

const dirSwitchB = dir => {
  switch (dir) {
    case 'north': return 'east';
    case 'east': return 'north';
    case 'south': return 'west';
    case 'west': return 'south';
  }
}

const getNewPos = (pos, dir) => {
  switch (dir) {
    case 'north': return [pos[0] - 1, pos[1]];
    case 'east': return [pos[0], pos[1] + 1];
    case 'south': return [pos[0] + 1, pos[1]];
    case 'west': return [pos[0], pos[1] - 1];
  }
}

const moveOne = (pos, dir, artifact) => {
  pos = getNewPos(pos, dir);
  if (artifact[pos[0]] === undefined || artifact[pos[0]][pos[1]] === undefined) {
    return {
      pos,
      dir
    }
  }
  if (artifact[pos[0]][pos[1]] === 'A') {
    dir = dirSwitchA(dir);
    artifact[pos[0]] = artifact[pos[0]].substr(0, pos[1]) + 'B' + artifact[pos[0]].substr(pos[1] + 1);
  } else if (artifact[pos[0]][pos[1]] === 'B') {
    dir = dirSwitchB(dir);
    artifact[pos[0]] = artifact[pos[0]].substr(0, pos[1]) + 'A' + artifact[pos[0]].substr(pos[1] + 1);
  }
  return {
    pos,
    dir
  }
}

const singleRide = (artifact, explorer) => {
  let pos = [explorer, 0];
  let dir = 'east';
  while (pos[0] >= 0 && pos[0] < artifact.length && pos[1] >= 0 && pos[1] < artifact.length) {
    const moveResult = moveOne(pos, dir, artifact);
    pos = moveResult.pos, dir = moveResult.dir;
  }
  if (pos[0] < 0) return [pos[0] + 1, pos[1]];
  if (pos[1] < 0) return null;
  if (pos[0] === artifact.length) return [pos[0] - 1, pos[1]];
  if (pos[1] === artifact.length) return [pos[0], pos[1] - 1];
}


const rideOfFortune = (artifact, explorers) => {
  return explorers.map(explorer => singleRide(artifact, explorer));
}
