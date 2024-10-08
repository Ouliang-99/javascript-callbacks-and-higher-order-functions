// Exercise #1: For Each Function
function forEach(array, operation) {
  operation(array);
  return;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, function (array) {
  for (let salary of array) {
    newEmployeeSalaries.push(salary + 5000);
  }
  return;
});

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
