/*
FizzBuzz is probably the most common interview question for entry level developers. At least, it used to be. It may not be used as much because of how common it was. It's a simple problem that tests your ability to think logically and write clean code.

Traditionally, you loop from 1 to 100 and print out each number. However, if the number is divisible by 3, you print out "Fizz" instead. If the number is divisible by 5, you replace out "Buzz" instead. If the number is divisible by both 3 and 5, you replace out "FizzBuzz" instead.

In this challenge, you will write a function called fizzBuzz that takes in a number and return an array However, if the number is divisible by 3, you should add "Fizz" in an array. If the number is divisible by 5, you should add "Buzz" in an array. If the number is divisible by both 3 and 5, you should add "FizzBuzz".
*/

const fizzBuzz = (n) => {
  const result = [];
  // Loop through the numbers from 1 to the number passed in
  for (let i = 1; i <= n; i++) {
    // If the number is divisible by 3
    // and 5, add 'FizzBuzz'
    if (i % 5 === 0 && i % 3 === 0) {
      result.push('FizzBuzz');
    }
    // If the number is divisible by 3, add 'Fizz'
    else if (i % 3 === 0) {
      result.push('Fizz');
    }
    // If the number is divisible by 5, add 'Buzz'
    else if (i % 5 === 0) {
      result.push('Buzz');
    }
    // otherwise, add i
    else {
      result.push(i);
    }
  }
  return result;
};
console.log('Test 1');
console.log(fizzBuzz(15));
console.log('Test 2');
console.log(fizzBuzz(30));
