
var testResult = prompt("please enter the score: ");
if (testResult < 60) {
    console.log('F');
} else if (testResult < 70 && testResult >= 60 )  {
    console.log('D');
}  else if (testResult < 80 && testResult >= 70 )  {
    console.log('C');
}  else if (testResult < 90 && testResult >= 80 )  {
    console.log('B');
}  else if (testResult < 90 && testResult >= 80 )  {
    console.log('A');
} else {
    console.log('must be less than or equal to 100')
}

