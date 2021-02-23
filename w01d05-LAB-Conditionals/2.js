var userAge = prompt('Please enter your age:');

if (userAge < 18) {
    let remainder = 18 - userAge;
    console.log("Sorry, you have " + remainder + " years to wait until you can drive");
} else {
    console.log('Drive away!');
}