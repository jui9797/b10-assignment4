
function calculateTax(income, expenses) {

    if(income < 0 || expenses < 0 || expenses > income){
     return 'Invalid Input'
    }
 
     const tax =(income - expenses) * .20;
     return tax;
}

function sendNotification(email) {

    let word ='@';
    if(!email.includes(word) || email.split('@').length > 2){
        return 'Invalid Email';
    }

    const part =email.split('@');
    
    const message =`${part[0]} sent you an email from ${part[1]}`;
    return message;
}

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

function  waitingTime(waitingTimes  , serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
     return 'Invalid Input';
    }
    
 
    let sum =0;
    for(let num of waitingTimes){
     sum +=num;
    } 
    let avg =Math.round(sum / waitingTimes.length);
 
 
    let remain =(serialNumber-1) - waitingTimes.length;
 
 
    let finalSerial =avg * remain;
    return finalSerial;
 }