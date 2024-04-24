let number1 = 23;
let number2 = 56;

function findLargestNumber(number1, number2) {
    if (number1 >= number2) {
        return number1;
    } else {
        return number2;
    }
}

let largestNumber = findLargestNumber(number1, number2);
console.log("The largest number is:", largestNumber);
