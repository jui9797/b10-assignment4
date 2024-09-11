// Problem 04 : Calculate Admission Final Score 

const candidate ={
     name: "Rajib",
     testScore: 45,
     schoolGrade: 25,
     isFFamily : true,
    }
const candidate2 ={
     name: "Rajib",
     testScore: 45,
     schoolGrade: 25,
     isFFamily : false,
    }
const candidate3 ={
     name: "Rajib",
     testScore: 15,
     schoolGrade: 25,
     isFFamily : true,
    }
const candidate4 ="hello";


function calculateFinalScore(obj) {

    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }

   let score =obj.testScore + obj.schoolGrade;
   if(obj.isFFamily){
    score =(obj.testScore + obj.schoolGrade) + 20;
   }

   if(score >= 80 && obj.testScore <= 50 && obj.schoolGrade <= 30){
    return true;
   }
   return false;
}



const test1 =calculateFinalScore(candidate);
console.log(test1);
const test2 =calculateFinalScore(candidate2);
console.log(test2);
const test4 =calculateFinalScore(candidate4);
console.log(test4);
const test3 =calculateFinalScore(candidate3);
console.log(test3);


