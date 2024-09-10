// problem-2:Notification Generator


function sendNotification(email) {

    let word ='@';
    if(!email.includes(word) || email.split('@').length > 2){
        return 'Invalid Email';
    }

    const part =email.split('@');
    
    const message =`${part[0]} sent you an email from ${part[1]}`;
    return message;
}

const email =sendNotification('zihad@gmail.com');
console.log(email)
const email2 =sendNotification('farhan34@yahoo.com');
console.log(email2)
const email3 =sendNotification('nadim.naem5@outlook.com');
console.log(email3)
const email4 =sendNotification('fahim234.hotmail.com');
console.log(email4)
const email5 =sendNotification('sadia8icloud.com');
console.log(email5)
const email6 =sendNotification('isfak.gmal');
console.log(email6)
const email7 =sendNotification('isaha@gmail.com');
console.log(email7)
