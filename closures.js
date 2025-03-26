// Closures
// Allow variables from an outer function's scope even 
// after the outer function has finished executing.

// This is possible because functions in JavaScript form closures around the scope in which they were defined.
function outerFunction() {
    let outerVariable = 'I am from outer scope';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closure = outerFunction();
closure();  // Output: 'I am from outer scope'

// How Closures Work?
// 1. Function creation and scope: When a function is created, it captures the scope in which it was defined (this includes variables, parameters and inner functions)
// 2. Inner function accessing outer variables: inner function has access to its own scope, the scope of its containing (outer) function, and the global scope.
// 3. Persistence of variables: When the outer function returns, its scope is not destroyed if there is an inner function that still references it. The variables in the outer scope persist as long as the inner function exists.


 // -------------------

function createCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

const bla = {
	"passphrase": "abcdefgh",
	"time": "2025-01-20T17:30:21Z",
	"exchange": "BINANCE",
	"ticker": "BTCUSDT",
	"strategy": {
        "position_size": 0,
        "order_action": "buy",
        "order_contracts": 0.09123,
        "order_price": 104648.69,
        "order_id": "Short Exit",
        "market_position": "flat",
        "market_position_size": 0,
        "prev_market_position": "short",
        "prev_market_position_size": 0.09123,
        "tp_and_sl": 713.6981777989 | 2141.0945333967
    }
}
