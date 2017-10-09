function solve(a0, a1, a2, b0, b1, b2) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < 3; i++){
    if(arguments[i] > arguments[i+3]){
      a += 1;
    }
    else if(arguments[i + 3] > arguments[i]) {
      b += 1;
    }
  }

  return [a, b]
}

console.log(solve(4, 0, 4, 1, 1, 4))
