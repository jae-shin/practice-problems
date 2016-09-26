/*
  JavaScript Class Instantiation Patterns

  1. Functional (non-shared methods)
  2. Functional (shared methods)
  3. Prototypal
  4. Pseudoclassical

  ES6 Classes
 */


// 1. Functional (non-shared methods)
var Car = function(loc) {
  var obj = {};
  obj.loc = loc;
  obj.move = function() {
    obj.loc++;
  };
  return obj;
};

var truck = Car(5);

// 2. Funtional (shared methods)
var Car = function(loc) {
  var obj = {};
  obj.loc = loc;
  obj.move = carMethods.move;
  return obj;
};

var carMethods = {
  move: function() {
    this.loc++;
  }
};

var truck = Car(5);

// 3. Prototypal
var Car = function(loc) {
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};

Car.prototype = {
  move: function() {
    this.loc++;
  }
};

var truck = Car(5);

// 4. Psuedoclassical
var Car = function(loc) {
  this.loc = loc;
};

Car.prototype = {
  move: function() {
    this.loc++;
  }
};

var truck = new Car(5);

// ES6 Classes
class Car {
  constructor(loc) {
    this.loc = loc;
  }

  move() {
    this.loc++;
  }
}

class PoliceCar extends Car {
  constructor(loc) {
    super(loc);
    this.siren = false;
  }

  toggleSiren() {
    this.siren = !this.siren;
  }
}

const truck = new Car(4);
truck.move();
console.log(truck);

const police = new PoliceCar(2);
console.log(police);