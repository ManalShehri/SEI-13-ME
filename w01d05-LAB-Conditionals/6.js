const desiredTemp = 50;
var currentTemp = 40; 
var airconditioner = 'non-functional'; 
if (currentTemp > desiredTemp && airconditioner == "functional") {
    console.log('Turn on the A/C Please');
}
if (airconditioner == 'non-functional' &&  currentTemp > desiredTemp) {
    console.log("Fix the A/C now! It's hot!");
}
if (airconditioner == 'non-functional' && currentTemp < desiredTemp) {
    console.log("Fix the A/C whenever you have the chance... It's cool...")
}
