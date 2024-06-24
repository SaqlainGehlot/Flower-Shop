let myArr = [27, 64, 78, 21, 92, 10, 56, 91];

myArr.push(83);
myArr.shift();

function findMax(arr) {
  return Math.max(...arr);
}

function calcAvrg(arr){
    let sum = arr.reduce((a,b) => a+b,0);
    return sum / arr.length;
}

console.log(myArr);
console.log(findMax(myArr));
console.log(calcAvrg(myArr));
