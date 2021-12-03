import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map(row => {
  const splitRow = row.split(' ');
  return { direction: splitRow[0], units: Number(splitRow[1]) };
});

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  var horizontalPosition = 0;
  var depth = 0;
  input.forEach(({ direction, units }) => {
    switch (direction) {
      case 'forward':
        horizontalPosition += units;
        break;
      case 'up':
        depth -= units;
        break;
      case 'down':
        depth += units;
        break;
    }
  });

  return depth * horizontalPosition;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  var horizontalPosition = 0;
  var depth = 0;
  var aim = 0;
  input.forEach(({ direction, units }) => {
    switch (direction) {
      case 'forward':
        horizontalPosition += units;
        depth += (units * aim);
        break;
      case 'up':
        aim -= units;
        break;
      case 'down':
        aim += units;
        break;
    }
  });

  return depth * horizontalPosition;
};

run({
  part1: {
    tests: [
      {
        input: `
        forward 5
        down 5
        forward 8
        up 3
        down 8
        forward 2
        `, expected: 150
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
      forward 5
      down 5
      forward 8
      up 3
      down 8
      forward 2
      `, expected: 900
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
