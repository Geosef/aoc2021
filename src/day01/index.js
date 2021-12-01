import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map(Number);

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  var counter = 0;

  input.forEach((n, i) => i > 0 && n > input[i - 1] && counter++);

  return counter;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  var counter = 0;

  input.forEach((n, i) => i > 2 && n > input[i - 3] && counter++);

  return counter;
};

run({
  part1: {
    tests: [
      {
        input: `199
      200
      208
      210
      200
      207
      240
      269
      260
      263`, expected: 7
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `199
        200
        208
        210
        200
        207
        240
        269
        260
        263`,
        expected: 5
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
});
