//without recursive
console.log('without recursion');
function CD(number) {
  for (let index = number; index > 0; index--) {
    console.log(index);
  }
  console.log('End');
}
CD(5);

//with recursion
console.log('with recursion');
function countDown(num) {
  if (num <= 0) {
    console.log('End');
    return;
  }
  console.log(num);
  countDown(num - 1);
}
countDown(5);
