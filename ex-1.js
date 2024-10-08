// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  operation(array);
  return;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

function plusSalary (array){
  for(let i = 0 ; i < employeeSalaries.length; i++){
    newEmployeeSalaries.push(array[i] + 5000);
  }
  return;
};

forEach(employeeSalaries, plusSalary);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
