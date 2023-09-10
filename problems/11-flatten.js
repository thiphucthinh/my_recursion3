/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
    if (arr.length === 0) {
        return [];
    }

    const first = arr[0];
    const rest = flatten(arr.slice(1));

    if (Array.isArray(first)) {
        return first.concat(flatten(rest));
    }
    else {
        return [first].concat(flatten(rest));
    }
}

// Wrong approach that make every arr[0] in its own square bracket before being concated.
// That make the result the same as its initial state.
// function flatten(arr) {
//     if (arr.length === 0) {
//       return [];
//     }
//     else {
//       return [arr[0]].concat(flatten(arr.slice(1)));
//     }
//   }

// Trying to find the pattern
// [1, [2, [3, [4, [5]]]]]

// 1  [[2, [3, [4, [5]]]]]

// [1 2 ] [[[3, [4, [5]]]]]

// [1 2 3 ] [[[[4, [5]]]]]

// [1 2 3 4 ] [[[[[5]]]]]

// [1 2 3 4 5 ] [[[[[]]]]]

//Examples:

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
