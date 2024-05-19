// Optional Parameter Num3?
function addnum(num1: number, num2: number, num3?: number) {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(2, 3);

// Required Parameter
const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;
console.log(sub);

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};
