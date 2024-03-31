const restOperator = (a, b, ...args) => {
  console.log(a, b, args);
};
restOperator(1, 'two', 'three', 'four', true);
