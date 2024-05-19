// String
var lname;
lname = "Vidusha";
console.log("Last Name", lname);
// Number
var age;
age = 34;
console.log("age", age);
// Boolean
var isValid = true;
console.log(isValid);
// Array
var empList;
var numList;
empList = ["Vidusha", "Vidusha1", "Vidusha2"];
numList = [1, 2, 3, 4, 5];
var result = numList.filter(function (numList) { return numList > 2; });
var result1 = numList.filter(function (numList) { return numList === 2; });
var empExist = numList.reduce(function (acc, numList) { return acc + numList; });
console.log(result);
console.log("sum of array", empExist);
var c = 2 /* Color.black */;
// Tuple
var newNum = numList[0];
var swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
// swapNumbs[10];
var department;
department = "Department";
department = 42;
function add(num1, num2) {
    return num1 + num2;
}
var newsum = add(10, 20);
