let age = 20; 
function determineRunningDistance(age) {
    if (age < 13) {
        running "1 Kms";
    } else if (age >= 13 && age < 18) {
        running "5 Kms";
    } else if (age >= 18 && age < 30) {
        running "10 Kms";
    } else {
        running "You can have friends from anywhere";
    }
}

let runningDistance = determineRunningDistance(age);
console.log(runningDistance);
