/**
 * Move the N disks from the first tower to the last
 * print out all moves by naming the start and end towers:
 *   ex) for N = 2, output = [[first, middle], [first, last], [middle, last]]
 */

const towersOfHanoi = (n, start = 'first', temp = 'middle', end = 'last') => {
  if (n > 0) {
    towersOfHanoi(n-1, start, end, temp);
    console.log(`Moving disc ${n} from ${start} to ${end}`);
    towersOfHanoi(n-1, temp, start, end);
  }
};

// towersOfHanoi(10);

const revRange = (end, start) => {
  const result = [];
  for (let i = end; i >= start; i--) {
    result.push(i);
  }
  return result;
};

const towersOfHanoiStacks = (n, start = revRange(n, 1), temp = [], end = []) => {
  if (n > 0) {
    towersOfHanoiStacks(n-1, start, end, temp);
    end.push(start.pop());
    towersOfHanoiStacks(n-1, temp, start, end);
  }
};

// towersOfHanoiStacks(2);