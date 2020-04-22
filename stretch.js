function createBase(base) {
  // closure function inside is able to reference base from above
  return function (num) {
    // add them together
    return num + base;
  };
}

let addSix = createBase(6);
let addFour = createBase(4);

// this takes createBase(6) and adds that 6 to the argument of addSix (in this case 5)
addSix(5);

// this takes createBase(4) and adds that 4 to the argument of addFour (in this case 3)
addFour(3);
