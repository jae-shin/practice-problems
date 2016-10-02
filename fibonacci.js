// top-down (memoization)
const fibonacci = (n, memo = []) => {
  if (n === 0 || n === 1) {
    return n;
  }

  if (memo[n] === undefined) {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }

  return memo[n];
};

// bottom-up Dynamic Programming
const fibonacci2 = n => {
  const memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}

// Testing
console.log(fibonacci(1000));
console.log(fibonacci2(1000));