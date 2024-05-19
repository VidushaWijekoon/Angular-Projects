// Optional Parameters Num3?
function addnum(num1: number, num2: number, num3?: number) {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(2, 3);

// Required Parameters
const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;
console.log(sub);

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

// Rest Parameters
function add3(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add3(2, 3, ...numbers));

// Generic Function
// <Type> is a placeholder
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}
let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d", "f"]);
