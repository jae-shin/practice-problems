// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

const tripleStep = n => {
  // f(n) = f(n-1) + f(n-2) + f(n-3)
  const memo = [1, 1, 2];

  for (let i = 3; i <= n ; i++) {
    memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
  }

  return memo[n];
}

// Testing
console.log(tripleStep(3));
console.log(tripleStep(4));
console.log(tripleStep(10));
console.log(tripleStep(30));

