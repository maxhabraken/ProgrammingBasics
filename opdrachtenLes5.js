//opdracht 1
for (let i = 1; i <= 25; i++) {
    if (i % 4 == 0) {
        console.log(`${i} is deelbaar door 4`);
    } else {
        console.log(`${i} is niet deelbaar door 4`);
    }
}

//opdracht 2
function factorial(num){
    var result = num;
    if (num === 0 || num === 1){
        return 1;
    }
    while (num > 1){ 
        num --;
        result = result * num;
    }
    return result;
}
var output = factorial(4);
console.log(output);

//opdracht 3
function arraySum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
var sumOutput = arraySum([2, 4, 8, 9, 12, 13]);
console.log(sumOutput);