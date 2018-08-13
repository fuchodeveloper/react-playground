let bind = function (func, thisValue) {
  return function(){
    return func.apply(thisValue, arguments);
  }
};

let boundHello = bind(personalbar.hello, person);
boundHello('world');
