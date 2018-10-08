//opdracht 1
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) {
        return 1;
    }
    while (num > 1) {
        num--;
        result = result * num;
    }
    return result;
}
var output = factorial(4);
console.log(output);

//opdracht 2
function countDown() {
    var i = 11;
    var year = "2019"
    while (i > 0) {
        i--;
        console.log(i);
    }
    if (i == 0) {
        console.log("Happy", year, "!!");
    }
}
countDown()

//opdracht 3
hoisted();
function hoisted() {
    console.log("dit word gehoist en dus gelogged")
};

nonHoisted();

var nonHoisted = function () {
    console.log("dit wordt NIET gehoist en de functie word dus NIET herkend");
};