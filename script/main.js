
let num = 266219;
let newNum = num.toString();
let mult = 1;

for (let i = 0; i < newNum.length; i++){
  console.log(newNum[i]);
  mult = mult * newNum[i];
}

mult = mult ** 3;
console.log(mult);
console.log((mult.toString()).slice(0,2));
