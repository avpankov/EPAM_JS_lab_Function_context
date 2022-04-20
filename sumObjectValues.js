function sumObjectValues() {
    let result = [].reduce.call(arguments, (prev, value) => Object.values(prev).concat(Object.values(value)), []);

    result = result.reduce((prev, value) => {
        if (typeof value === "number") {
            prev += value;
        }
        return prev;
    }, 0)

    return result;
}

/**
function sumObjectValues() {
    let result = Array.prototype.reduce.apply(arguments, [(prev, value) => Object.values(prev).concat(Object.values(value)), []]);

    result = result.reduce((prev, value) => {
        if (typeof value === "number") {
            prev += value;
        }
        return prev;
    }, 0)

    return result;
}
*/

let object = {
    a: 2,
    name: 'John',
    age: 23
};

console.log(sumObjectValues(object))