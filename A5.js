let num1 = 4;
let num2 = 8;
let num3 = 5;

function compareNumbers(num1, num2, num3) {
    let Comparison = num1 > num2;
    console.log(Comparison);

    num1 += num3;
  let updatedComparison = num1 > num2;
    console.log(updatedComparison);
}

compareNumbers(num1, num2, num3);
