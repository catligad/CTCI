function explore(currentLocation, direction, maze) {
  const rowLength = maze.length;
  const colLength = maze[0].length;

  const newPath = currentLocation.path.slice();
  newPath.push([currentLocation.row, currentLocation.col]);

  let row = currentLocation.row;
  let col = currentLocation.col;

  if (direction === 'up') {
    row -= 1;
  } else if (direction === 'down') {
    row += 1;
  } else if (direction === 'left') {
    col -= 1;
  } else if (direction === 'right') {
    col += 1;
  }

  let status;
  if (row < rowLength && row >= 0 && col >= 0 && col < colLength) {
    if (maze[row][col] === 3) {
      status = 3;
    } else if (maze[row][col] === 0) {
      maze[row][col] = 2;
      status = 0;
    } else if (maze[row][col] === 2 || maze[row][col] === 1) {
      status = 1;
    }
  }

  let newLocation = {
    row: row,
    col: col,
    path: newPath,
    status: status,
  }

  return newLocation;
}

function binaryMaze(maze, start, end) {
  maze[end[0]][end[1]] = 3;

  let location = {
    row: start[0],
    col: start[1],
    path: [],
    status: 0,
  }

  let queue = [location];

  while(queue.length > 0) {
    let currentLocation = queue.shift();
    let newUp = explore(currentLocation, 'up', maze);
    if (newUp.status === 0) {
      queue.push(newUp);
    } else if (newUp.status === 3) {
      newUp.path.push(end);
      return newUp.path;
    }

    let newDown = explore(currentLocation, 'down', maze);
    if (newDown.status === 0) {
      queue.push(newDown);
    } else if (newDown.status === 3) {
      newDown.path.push(end);
      return newDown.path;
    }

    let newLeft = explore(currentLocation, 'left', maze);
    if (newLeft.status === 0) {
      queue.push(newLeft);
    } else if (newLeft.status === 3) {
      newLeft.path.push(end);
      return newLeft.path;
    }

    let newRight = explore(currentLocation, 'right', maze);
    if (newRight.status === 0) {
      queue.push(newRight);
    } else if (newRight.status === 3) {
      newRight.path.push(end);
      return newRight.path;
    }
  }

  return 'there are no solutions';
}

//------------------------------------------------------------------
const maze1 = [
  [0,1,0,0,0], //0
  [0,1,1,0,0], //1
  [0,0,0,0,0], //2
  [0,1,0,0,0], //3
  [0,0,0,1,0], //4
];
const maze2 = [
  [0,1,0,0,0], //0
  [0,1,1,0,0], //1
  [0,0,0,0,0], //2
  [0,1,0,0,0], //3
  [0,0,0,1,0], //4
];
const maze3 = [
  [0,1,0,0,0], //0
  [0,1,1,0,0], //1
  [0,0,0,0,0], //2
  [0,1,0,0,0], //3
  [0,0,0,1,0], //4
];
const maze4 = [
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

const test = (cb) => {
  const input = [
    [maze1, maze1SourceA, maze1Destination], 
    [maze2, maze1SourceB, maze1Destination], 
    [maze3, maze1SourceC, maze1Destination], 
    [maze4, maze1SourceD, maze1Destination]
  ];
  const output = [
    maze1SolA, 
    maze1SolB1, 
    maze1SolC, 
    maze1SolD
  ];
  for (let i = 0; i < input.length; i++) {
    let shortestPath = cb(...input[i]);
    if (JSON.stringify(shortestPath) != JSON.stringify(output[i])) {
      console.log(`${i} failed. Expected ${JSON.stringify(output[i])}, received ${JSON.stringify(shortestPath)}`);
    } else {
      console.log(i + ' passed');
    }
  }
}

test(binaryMaze);



