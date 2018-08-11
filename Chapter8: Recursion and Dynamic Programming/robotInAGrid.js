// Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
const moveRight = (grid, position) => {
  let newPosition = grid[position[0]][position[1] + 1];
  if (newPosition === '') {
    return [position[0], position[1]+1];
  } else {
    return false;
  }
}

const moveDown = (grid, position) => {
  if (grid[position[0] + 1] !== undefined) {
    let newPosition = grid[position[0] + 1][position[1]];
    if (newPosition === '') {
      return [position[0]+1, position[1]];
    }
  }
  return false;
}

const robotInAGrid = (grid, position) => {
  let endOfGrid = [grid.length-1,grid[0].length - 1];
  if (endOfGrid === 'X') {
    console.log('There are no paths available');
    return;
  }
  let paths = [];
  const recurse = (grid, position, path) => {
    if (JSON.stringify(position) == JSON.stringify(endOfGrid)) {
      paths.push(path + 'END');
      return;
    }
    let newRightPosition = moveRight(grid, position)
    if (newRightPosition) {
      recurse(grid, newRightPosition, path + 'R,');
    }
    let newDownPosition = moveDown(grid, position);
    if (newDownPosition) {
      recurse(grid, newDownPosition, path + 'D,');
    }
    return;
  }
  recurse(grid, position, 'START,');
  console.log(paths);
}

robotInAGrid(
  [
    ['', '', '', 'X'],
    ['', 'X', '', ''],
    ['', '', 'X', ''],
    ['X', '', '', '']
  ], [0,0]
)
