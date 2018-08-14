const maze1 = [
  [0,1,0,0,0], //0
  [0,1,1,0,0], //1
  [0,0,0,0,0], //2
  [0,1,0,0,0], //3
  [0,0,0,1,0], //4
];

const maze1SourceA = [0, 0];
const maze1SourceB = [0, 4];
const maze1SourceC = [4, 0];
const maze1SourceD = [4, 4];

const maze1Destination = [3, 2];

const maze1SolA = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [3, 2]];
const maze1SolB1 = [[0, 4], [1, 4], [2, 4], [3, 4], [3, 3], [3, 2]];
const maze1SolB2 = [[0, 4], [0, 3], [1, 3], [2, 3], [2, 2], [3, 2]];
const maze1SolC = [[4, 0], [4, 1], [4, 2], [3, 2]];
const maze1SolD = [[4, 4], [3, 4], [3, 3], [3, 2]];


//------------------------------------------------------------------


const status = (location, grid) => {
  length = grid.length;
  row = location.row;
  col = location.col;

  if (location.col < 0 || location.col >= length || location.row < 0 || location.row >= length) {
    return false;
  } else if (grid[row][col] === 2) {
    return true;
  } else {
    return grid[row][col];
  }
}

const explore = (currentLocation, direction, grid) => {
  let newPath = currentLocation.path.slice();
  newPath.push([currentLocation.row, currentLocation.col]);

  let row = currentLocation.row;
  let col = currentLocation.col;

  if (direction === 'up') {
    row -= 1;
  } else if (direction === 'left') {
    col -= 1;
  } else if (direction === 'down') {
    row += 1;
  } else if (direction === 'right') {
    col += 1;
  }

  const newLocation = {
    row: row,
    col: col,
    path: newPath,
    status: '',
  }
  newLocation.status = status(newLocation, grid);
  if (newLocation.status === 0) {
    grid[row][col] = 2;
  }
  return newLocation;
}

// 0 = valid
// 1 = blocked
// 2 = visited
// 3 = end

const binaryMaze = (maze, start, end) => {
  //setting the end for the maze
  debugger
  maze[end[0]][end[1]] = 3;

  let location = {
    row: start[0],
    col: start[1],
    path: [],
    status: 0,
  };

  const queue = [location];
  while(queue.length > 0) {
    const currentLocation = queue.shift();
    let newUp = explore(currentLocation, 'up', maze);
    if (newUp.status === 3) {
      newUp.path.push(end);
      return newUp.path;
    } else if (newUp.status === 0) {
      queue.push(newUp);
    }

    let newRight = explore(currentLocation, 'right', maze);
    if (newRight.status === 3) {
      newRight.path.push(end);
      return newRight.path;
    } else if (newRight.status === 0) {
      queue.push(newRight);
    }

    let newLeft = explore(currentLocation, 'left', maze);
    if (newLeft.status === 3) {
      newLeft.path.push(end);
      return newLeft.path;
    } else if (newLeft.status === 0) {
      queue.push(newLeft);
    }

    let newDown = explore(currentLocation, 'down', maze);
    if (newDown.status === 3) {
      newDown.path.push(end);
      return newDown.path;
    } else if (newDown.status === 0) {
      queue.push(newDown);
    }
  }
  return 'there is no solution';
}

const test = (cb) => {
  const input = [
    [maze1, maze1SourceA, maze1Destination], 
    [maze1, maze1SourceB, maze1Destination], 
    [maze1, maze1SourceC, maze1Destination], 
    [maze1, maze1SourceD, maze1Destination]
  ];
  const output = [
    maze1SolA, 
    maze1SolB2, 
    maze1SolC, 
    maze1SolD
  ];

  for (let i = 0; i < input.length; i++) {
    let shortestPath = cb(...input[i]);
    if (shortestPath.length != output[i].length) {
      console.log(`${i} failed. Expected ${JSON.stringify(output[i])}, received ${JSON.stringify(shortestPath)}`);
    } else {
      console.log(i + ' passed');
    }
  }
}

test(binaryMaze);