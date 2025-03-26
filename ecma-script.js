// ------ ES7 --------------
// New .include method for collections
const pets = ['cat', 'dog', 'bat'];
pets.includes("cat"); // true

// power of n
const cube = (x) => x**3; // returns x to the power of 3
// or x * x * x

//------ ES8 | ES2017 --------------

// for strings
const turtle = 'turtle';
turtle.padStart(10); // spaces before
turtle.padEnd(10); // spaced after

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch',
};
// Before
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

// NEW
Object.values(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).forEach(entry => {
    console.log(entry);
    // each entry is an array [key, value]
    ['username0', 'Santa']
});

//------ ES10 | ES2019 --------------
const array = [1 ,[2, 3], [4, 5], [6]] // Nested elements
array.flat()// how many levels/layers we want to flat.
array.flat(2);
array.flat(Infinity); // all layers if we don't know how deep it goes
// it also cleans empty values
const entries = ['bob','sally',,,,,,'cindy'];
entries.flat();
// entries = ['bob','sally','cindy']

// flatmap
entries.flatMap(value => value + "cindy"); // flattens the result to the deppen of 1

const userProfiles = [
    ['commanderTom', 23], 
    ['derekZlander', 40],
    ['hansel', 18]
]
Object.fromEntries(userProfiles);
// {commanderTom: 23, etc..}

// LOOPS
const basket = ['apples', 'oranges', 'grapes'];
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}
basket.forEach(value => {});
const detailedBasked = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
// for of (same as the normal for of foreach)
// iterating - arrays, strings
// it does not works on objects
for (let item of basket) {
    console.log(item); 
}

// for in - properties
// not iterating
// we are enumeraring - objects
for (let item in detailedBasked) {
    console.log(item);
}

//------ ES2020 --------------
// bigint - new type
// nullish coalescing operator ??
// optional chaining operator ?

//------ ES2022 --------------
basket.at(-1) // last element in the array
basket.at(-2) // before last
//------ ES2023 --------------
basket.findLast(item => true)
basket.reverse()// reverse the original array
basket.toReversed() // creates a copy with the original reversed
basket.toSpliced(2, 1) // from index 2 remove only one item. creates a copy instead modifying the original array
basket.with(1, "Gost") // create a new copy of basket and replace item of index 1 with Gost


//------ ES18 --------------

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albuns",
]
const getData = async function() {
    const arrayOfPromises = url.map(url => fetch(url));
    for await (const promise of arrayOfPromises) {
        const data  = await promise.json();
        console.log(data);
    }
}

Promise.allSettled(urls)
    .then(res => console).log(res)