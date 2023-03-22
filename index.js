function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Hello from a named function!");
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hello from an anonymous function!");
    }
  }