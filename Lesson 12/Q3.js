// function duplicateNumbers1(numbers) {
//     //Initialize an empty object to stare counts
//     const counts = {};


//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];
//         if (counts[num] != )
//     }

//     return duplicates;
// }


function duplicateNumbers2(numbers) {
    //Use reduce to count occurences
    const counts = numbers.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
            return acc;
    }, {});

    // Filter counts to find duplicates
    const duplicates = {};
        for (const num in counts) {
            if (counts[num] > 1) {
            duplicates[num] = counts[num];
            }
        }

    // IGNORE THIS
    // const duplicates = counts.filter(getDup);
    // function getDup(num){
    //     if (num > 1)
    // }

    return duplicates;
}

// Example usage
console.log(duplicateNumbers2([1,2,3,2,4,3,5]));
console.log(duplicateNumbers2([7,8,9]));