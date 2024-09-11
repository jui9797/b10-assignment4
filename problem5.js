// Problem 05:  Predict Avarage Waiting Time 
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



let waitingTimes1 =[ 3, 5, 7, 11, 6 ];
let serial1 =10;
console.log(waitingTime(waitingTimes1, serial1))
let waitingTimes2 =[13, 2];
let serial2 =6;
console.log(waitingTime(waitingTimes2, serial2))
let waitingTimes3 =[13, 2, 6, 7, 10];
let serial3 =6;
console.log(waitingTime(waitingTimes3, serial3))
let waitingTimes4 =[ 6 ];
let serial4 =4;
console.log(waitingTime(waitingTimes4, serial4))
let waitingTimes5 =7;
let serial5 =10;
console.log(waitingTime(waitingTimes5, serial5))
let waitingTimes6 ="[6,2]";
let serial6 =9;
console.log(waitingTime(waitingTimes6, serial6))
let waitingTimes7 =[7, 8, 3, 4, 5];
let serial7 ='9';
console.log(waitingTime(waitingTimes7, serial7))
