// // Problem-03: Checking Digits Inside a Name

// function checkDigitsInName(name) {
//     if(typeof name !== 'string'){
//         return 'Invalid Input'
//     }
   
//     if(name.includes(0) || name.includes(1) || name.includes(2) || name.includes(3) || name.includes(5) || name.includes(6) || name.includes(7) || name.includes(8) || name.includes(9) ){
//         return true;
//     }
//     else if(typeof name === 'string'){
//         return false
//     }
    
// }
// const test1 =checkDigitsInName('Raj123');
// console.log(test1);
// const test2 =checkDigitsInName('Suman'); 
// console.log(test2);
// const test3 =checkDigitsInName('Name2024');
// console.log(test3);
// const test4 =checkDigitsInName('!@#');
// console.log(test4);
// const test5 =checkDigitsInName(["Raj"]);
// console.log(test5);


function checkDigitsInName(name){
    if (typeof name !== "string") {
        return ("Invalid Input")    
    }
    const number=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const checkName=name.split("");
    
    for (const element of checkName) {
        if (number.includes(element)) {
            return true; 
        }
    }
    return false;
    
}
const test1 =checkDigitsInName('Raj123');
console.log(test1);
const test2 =checkDigitsInName('Shuvo1'); 
console.log(test2);
const test3 =checkDigitsInName('Name2024');
console.log(test3);
const test4 =checkDigitsInName('!@#');
console.log(test4);
const test5 =checkDigitsInName(["Raj"]);
console.log(test5);

