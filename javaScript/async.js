// How to fix?
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

// Fix 1: replace 'var' with 'let'
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

// Fix 2: bind i
for (var i = 0; i < 5; i++) {
  setTimeout(console.log.bind(console, i));
}