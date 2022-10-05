const add = (x, y) => {
    return x + y;
}
const sub = (x, y) => {
    return x - y;
};
const mul = (x, y) => {
    return x * y;
};
const div = (x, y) => {
    return x / y;
}

const apply = (a, b, fn) => {
    const val = fn(a, b);
    return val;
}

const result = apply(2, 3, add);
console.log(result);

//----------------------------------------------------

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduce = (arr, fn) =>{
    let result = arr[0];

    for (let i=1; i < arr.length; i++){
        result = fn(result, arr[i]);
    }
    return result;
}

const r5 = reduce(nums, add);
console.log(r5);


