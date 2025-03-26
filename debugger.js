const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        // console.log("array", array);
        // console.log("accumulator", accumulator);
        debugger;
        return accumulator.concat(array);
    }, []);


/*
    Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
    make a function that organizes these into individual array that is ordered. 
    For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
    Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
    should return [[1,2], ["2", "3"]]
*/
const cleanTheRoonFunc = (arr) => {
    const master = [];
    
    // Flattens and sort the array so we group by in an ordered manner
    const flatArray = arr.flat(Infinity).sort((a, b) => a - b);
    
    /**
     * Build an accumulator object
     * {
     *  str: { // Group all values typeof string
     *  },
     *  num: { // Group all values typeof number
     *      '1': [] // all the repeated 1s
     *  }
     * }
     */
    const groupedByItems = flatArray.reduce((accumulator, value) => {
        debugger;
        const propertyKey = typeof(value) === "string" ? "str" : "numb";
        if (!accumulator[propertyKey]) accumulator[propertyKey] = {};

        const obj = accumulator[propertyKey];
        if (!obj[value]) obj[value] = [];        

        obj[value].push(value);
        return accumulator;
    }, {});
    
    Object.values(groupedByItems).forEach(nestedObj => {
        Object.values(nestedObj).forEach(innerObject =>{
            if (innerObject.lenght === 1) master.push(innerObject[0]);
            else master.push(innerObject);
        });
    });

    return master;
}