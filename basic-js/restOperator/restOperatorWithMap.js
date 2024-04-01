const restOperator = (a, b, ...args) => {
    return args.map((element)=> element)
  };
  console.log(restOperator(1, 'two', 'three', 'four', true));