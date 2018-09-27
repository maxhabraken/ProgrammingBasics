//opdracht 1
var grade = "7";
if (grade < 6) {
    console.log(grade, " = onvoldoende");
} else if (grade >= 6 && grade <= 7) {
    console.log(grade, " = voldoende");
} else if (grade >= 7 && grade <= 9) {
    console.log(grade, " = goed");
} else if (grade > 9) {
    console.log(grade, " = uitmuntend");
} else {
    console.log("unknown input");
}

//opdracht 2
var grade = "8";
switch (grading){
    case (grade < 6):
    console.log(grade, " = onvoldoende");
    break;
    case (grade >= 6 && grade <= 7):
    console.log(grade, " = voldoende");
    break;
    case (grade >= 7 && grade <= 9):
    console.log(grade, " = goed");
    break;
    case (grade > 9):
    console.log(grade, " = uitmunted");
    break;
    default:
    console.log("unknown input");
    break;
}

//opdacht 3
var purchasedBook = true;
var job = "teacher";
var inTrain = false;

if (purchasedBook == true && job == "teacher" && inTrain == true){
    console.log("Finally i can enjoy my book!");
}else{
    console.log("I can not enjoy my book :(");
}