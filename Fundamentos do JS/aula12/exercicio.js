let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// //Forma principiante
// const temp = varA;
// varA = varB;
// varB = varC
// varC = temp
// console.log(varA, varB, varC)

// Forma moderna e avançada
[varA, varB, varC] = [varB,varC,varA]
console.log(varA, varB, varC)