const { one, two, three,
        four } = require('./numbers');

one();
two();
three();
four();

const firstVar = 1;
const secondVar = 2;
const thidVar = firstVar || null;

firstVar + secondVar;

const x = two()
  ? 4
  : (3 *
    4 *
    5);

one(x);

const funcMap = {
  one: () => {}
};

function myFunc() {}

myFunc(thidVar);
funcMap.one();
