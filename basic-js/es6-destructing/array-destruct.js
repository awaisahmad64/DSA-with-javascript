//Before Destructuring
const vehicles = ['Toyota', 'Tasla', 'Honda'];
// old way
let toyota = vehicles[0];
let tasla = vehicles[1];
let honda = vehicles[2];
console.log('Your array First item is ', toyota);
console.log('Your array Second item is ', tasla);
console.log('Your array third item is ', honda);
// after destructuring
console.log('***** After Array Destructuring *****');
const [deToyota, deTasla, deHonda] = vehicles;
console.log('Your array First item is ', deToyota);
console.log('Your array Second item is ', deTasla);
console.log('Your array third item is ', deHonda);

function calculations(a, b) {
  const sum = a + b;
  const minus = a - b;
  const multiple = a * b;
  const divide = a / b;
  return [sum, minus, multiple, divide];
}
const [s, mi, mu, di] = calculations(18, 12);
console.log('a and b sum is ', s);
console.log('a and b sub is ', mi);
console.log('a and b multiple is ', mu);
console.log('a and b division is ', di);
