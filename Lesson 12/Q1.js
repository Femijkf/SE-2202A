function calculatedAverageSalary(employees, department) {
    // Step 1: Filter employees by department and years of experience
    const filteredEmployees = employees.filter(employee =>
        employee.department === department && employee.yearsOfExperiecnce > 5
    );

    // Step 2: Calculate the total salary using reduce
    const totalSalary = filteredEmployees.reduce((sum, employee) =>
        sum + employee.salary, 0);

    // Step 3: Calculate and return the average salary rounded to 2 decimal places
    if (filteredEmployees.length === 0) {
        return 0; // Return 0 if no employees match the criteria
    } else {
        const average = totalSalary / filteredEmployees.length;
        return parseFloat(average.toFixed(2)); // Round to 2 decimal places and return as a number
    }
}

// Example employee data
const employees = [
    { name: 'Alice', department: 'Engineering', salary: 90000, yearsOfExperiecnce: 6 },
    { name: 'Bob', department: 'Engineering', salary: 110000, yearsOfExperiecnce: 8 },
    { name: 'Charlie', department: 'HR', salary: 70000, yearsOfExperiecnce: 3 },
    { name: 'Diana', department: 'Engineering', salary: 120000, yearsOfExperiecnce: 10 },
    { name: 'Edward', department: 'HR', salary: 75000, yearsOfExperiecnce: 7 }
];

// Example usage
const averageSalary = calculatedAverageSalary(employees, 'Engineering');
console.log(`The average salary for the Engineering department is: $${averageSalary}`);
