const createHelloWorld = () => {
  return (...args) => {
    return 'Hello World';
  };
};

const f = createHelloWorld();
console.log(f());
