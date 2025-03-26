// Currying
// Closures allow functions to be partially applied or curried, enabling more flexible and reusable code.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

multiplyBy5(2); // 10;
multiplyBy5(5); // 25;
// -------------

function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10