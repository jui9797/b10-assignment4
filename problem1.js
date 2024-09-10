// Problem-01 : Tax Calculator


function calculateTax(income, expenses) {

   if(income < 0 || expenses < 0 || expenses > income){
    return 'Invalid Input'
   }

    const tax =(income - expenses) * .20;
    return tax;
}

const calculate =calculateTax(10000, 3000);
console.log(calculate);
const calculate2 =calculateTax(34000, 1753);
console.log(calculate2);
const calculate3 =calculateTax(5000, 1500);
console.log(calculate3);
const calculate4 =calculateTax(7000, 7000);
console.log(calculate4);
const calculate5 =calculateTax(-5000, 2000);
console.log(calculate5);
const calculate6 =calculateTax(6000, -1500);
console.log(calculate6);
