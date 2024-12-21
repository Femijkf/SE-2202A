const grades = [75, 50, 96, 88, 65, 95];

let maximum = grades.reduce(getMax);
function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

console.log("Maximum :: " + maximum);

maximum = grades.reduce(function(accumulator, element) {
    if (accumulator > element) {
        return accumulator;
    }
    else {
        return element;
    }
})
console.log("Maximum 1 :: " + maximum);

maximum = grades.reduce(function(accumulator, element) {
    return Math.max(accumulator, element);
});
console.log("Maximum 2 :: "  + maximum);

maximum = grades.reduce(function(maximum, num) {
    return Math.max(maximum, num);
})
console.log("Maximum 3 :: " +  maximum);

maximum =  grades.reduce((accumulator, element) => Math.max(accumulator, element));
console.log("Maximum 4 :: " + maximum);

let sumation = grades.reduce((sum, grade) => sum + grade);
console.log("Sumation :: " + sumation);