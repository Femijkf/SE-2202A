// //Solution #1
// function calculatePositiveNegativeTotals1(numbers) {
//     let positiveTotal = 0;
//     let negativeTotal = 0;

//     // Iterate over the array and calculate the totals
//     for (let i=0; i < numbers.length; i++) {
//         let num = numbers[i];
//         if (num > 0) {
//             positiveTotal += num;
//         }
//         else if (num < 0) {
//             negativeTotal += num;
//         }
//         //zero values are ignored
//     }

//     let results = {
//         positiveTotal: positiveTotal,
//         negativeTotal: negativeTotal
//     };

//     // Return the result as an object
//     return results;
// }

// //Solution #2
// function calculatePositiveNegativeTotals2(numbers) {
//     //Calculate the sum of positive numbers
//     const positiveTotal = numbers
//         .filter(function(num) {
//             return num > 0;
//         })
//         .reduce(function(sum, num) {
//             return sum + num;
//         }, 0);

//         //Calculate the sum of positive numbers
//     const negativeTotal = numbers
//     .filter(function(num) {
//         return num < 0;
//     })
//     .reduce(function(sum, num) {
//         return sum + num;
//     }, 0);

//     let results = {
//         positiveTotal: positiveTotal,
//         negativeTotal: negativeTotal
//     };

//     return results;
// }

//Solution #3 (Arrow Function)
function calculatePositiveNegativeTotals3(numbers) {
        //Calculate the sum of positive numbers
    const positiveTotal = numbers
        .filter(num => num > 0)
        .reduce((sum, num) => sum + num, 0)
        
    const negativeTotal = numbers
        .filter(num => num < 0)
        .reduce((sum, num) => sum + num, 0)

    let results = {
        positiveTotal: positiveTotal,
        negativeTotal: negativeTotal
    };

    return results;
}

const numbers = [1, -2, 3, -4, 5, -6, 0];
// const totals1 = calculatePositiveNegativeTotals1(numbers)
// const totals2 = calculatePositiveNegativeTotals2(numbers)
const totals3 = calculatePositiveNegativeTotals3(numbers)
// console.log(totals1);
// console.log(totals2);
console.log(totals3);