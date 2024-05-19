// String
let lname: string;
lname = "Vidusha";
console.log("Last Name", lname);

// Number
let age: number;
age = 34;
console.log("age", age);

// Boolean
let isValid: boolean = true;
console.log(isValid);

// Array
let empList: string[];
let numList: Array<number>;

empList = ["Vidusha", "Vidusha1", "Vidusha2"];
numList = [1, 2, 3, 4, 5];

let result = numList.filter((numList) => numList > 2);
let result1 = numList.filter((numList) => numList === 2);
let empExist = numList.reduce((acc, numList) => acc + numList);

console.log(result);
console.log("sum of array", empExist);

// ENum
const enum Color {
  red,
  green,
  black,
  white,
}

let c: Color = Color.black;

// Tuple
let newNum = numList[0];
let swapNumbs: [number, number];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num1, num2];
}

swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
// swapNumbs[10];

let department: any;

department = "Department";
department = 42;

function add(num1: number, num2: number): any {
  return num1 + num2;
}

let newsum = add(10, 20);

// Funtions
