//Map -Create a new array by doing something with each item in an array.

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]






// Filter - Create a new array by keeping the items that only return true

var numbers_two = [3, 56 , 2, 48, 5];

const newNumbers = numbers_two.filter(function (num) {
    return num > 10
})

console.log(newNumbers);

// Reduce - Accumulate a value by doing something to each item in an array.

var newNewNumbers = [3, 56, 2, 48, 5];

var newNumber = newNewNumbers.reduce(function (accumulator, currentNumber) {
    console.log("accumulator = " + accumulator);
    console.log("currentNumber = " + currentNumber)
        return accumulator + currentNumber;
})

// Output
// accumulator = 3
// currentNumber = 56
// accumulator = 59
// currentNumber = 2
// accumulator = 61
// currentNumber = 48
// accumulator = 109
// currentNumber = 5


// Find - find the first item that matches from an array.

const findNumber = numbers.find(function (num) {
    return num > 10;
})

console.log(findNumber);

// FindIndex - find the INDEX of the first item that matches.

const indexNumber = numbers.index(function (num) {
    return num > 10;
})

console.log(indexNumber);

// Task: Add meanings that are less than 100 characters to an empty array and then print it out.

// import emojipedia from "./emojipedia";

// // console.log(emojipedia);

// // var emoji_array = [emojipedia];

// // const filteredText = emoji_array.filter(function (emoji) {
// //   return emoji.length > 100;
// // });

// // console.log(filteredText);

// const newEmojipedia = emojipedia.map(function (emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// });

// console.log(newEmojipedia);
