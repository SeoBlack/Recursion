const fibrec = (n) => {return n <= 0 ? "non valid number" : n ===1 ? [0] : n === 2 ?[0,1] : [...fibrec(n-1),fibrec(n-1)[n-2] + fibrec(n-1)[n-3]]}
// console.log(fibrec(8));