// sumrang without recursion
console.log('sumrang without recursion');
      function SumRang(number) {
        let result = 0;
        for (let index = number; number > 0; number--) {
          result = result + number;
        }
        return result;
      }
      console.log(SumRang(10));
// sumrang with recursion
// console.log('sumrang with recursion');
// function sumRang(num, total = 0) {
//   if (num <= 0) {
//     return total;
//   }
//   return num * sumRang(num - 1, total + num);
// }
// console.log(sumRang(10));
