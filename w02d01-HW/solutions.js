/*
Your soulutions go in this file.
Do not forget to link this file in the index.html file so that the browser can load it
*/

// 1. What is the difference between a parameter and an argument?
// parameter: the names of variables in the function definition.
// argument: the values of those variables when the function is invoked.
// e.g. let's have a func called yourInfo(Name,Age) to hold person's name & age => Name & Age both are parameters
// But, when invoke the func: yourInfo("Manal",24) => Manal & 24, the values passed are called arguments.

// 2. Within a function, what is the difference between return and console.log?
// return is the functions' responds or pass value, each function has to pass a respond even "undefined",
// basically it is the end of the function and no instractions after will be done.
// e.g. let's have a func for checking attendance. isAttend() => will pass (or return) a value with even true or false. Manal.isAttend() 
// console.log() on the other hand is different. it is a way of printing out on the screen any value inside it. 
// log() itself is a function and it has a return 
// e.g. when you want to print or (log) the returned valued of our function we are going to use console.log(Manal.isAttend()) 


// Palindrome 
function checkPalindrome(word)
{
    var isPalindrome = false; // declear the checker as false
    var toLower  = word.toLowerCase();
    var reverse = toLower.split('').reverse().join(''); 
 
    if (reverse === toLower)
    {
        isPalindrome = true; 
    }
    return isPalindrome;
}
console.log('Palindrome Part:');
console.log("checkPalindrome('Radar') =>",checkPalindrome('Radar'));
console.log("console.log(checkPalindrome('Borscht')) =>" ,checkPalindrome("Borscht"));


// Sum Array 
function sumArray (arr){

    if (!arr.some(isNaN)){ // check if the array contains only numric val
        let sum = 0;
        for(var i=0 ; i<arr.length;i++)
        {
            sum = sum + arr[i];
        }
        return sum;
    } else
    {
        return 'please insert numric values!!';
    }

}
console.log('Sum Array Part:');
console.log("console.log(sumArray([1, 2, 3, 4, 5, 6])) =>",sumArray([1, 2, 3, 4, 5, 6]));
console.log("console.log(sumArray([1, 'Manal', 3, 4, 5, 6])) =>",sumArray([1, 'Manal', 3, 4, 5, 6]));

// Prime Numbers
function checkPrime (num){
    for (var i = 2; i< Math.sqrt(num); i++ ){
        if (num % i === 0 )
        {
            return false;
        }
    }
    return true;
}

function printPrimes (num) {
    for(var i=0; i<=num; i++)  
    {
        if(checkPrime(i))
        {
            console.log(i);
        }
    }
}
console.log('Prime Numbers Part:');
console.log('checkPrime(3)=>',checkPrime(3));
console.log('printPrimes(9):');
printPrimes(9);

// Rock Paper Scissors
function randomMove (){
    var moves = ['rock','paper','scissors'];
    var random = (Math.floor(Math.random() * moves.length ));
    return moves[random];
}

function rockPaperScissors (compMove, userMove){
    var printed = 'computer chose '+compMove + '\n user chose ' + userMove;
    if (compMove === userMove)
    {
        printed += ' \n the same, no one wins!';
    } 
    // computer wins
    else if (compMove === 'rock' && userMove === 'scissors'){
        printed += ' \n rock beats scissors, computer wins!';
    }
    else if (compMove === 'scissors' && userMove === 'paper'){
        printed += ' \n scissors beats paper, computer wins!';
    }
    else if (compMove === 'paper' && userMove === 'rock'){
        printed += ' \n paper beats rock, computer wins!';
    }
    // user wins
    else if (userMove === 'rock' && compMove === 'scissors'){
        printed += ' \n rock beats scissors, user wins!';
    }
    else if (userMove === 'scissors' && compMove === 'paper'){
        printed += ' \n scissors beats paper, user wins!';
    }
    else if (userMove === 'paper' && compMove === 'rock'){
        printed += ' \n paper beats rock, user wins!';
    }
    return printed;
}
console.log('Rock Paper Scissors');
console.log(rockPaperScissors(randomMove(),randomMove()));

// Super bonuses for rock paper scissors
function randomMoveBonuses(){
    var moves = ['rock','paper','scissors','lizard','spock'];
    var random = (Math.floor(Math.random() * moves.length ));
    return moves[random];
}

function gameOn(compMove, userMove){
    var printed = 'computer chose '+compMove + '\n user chose ' + userMove;
    if (compMove === userMove)
    {
        printed += ' \n the same, no one wins!';
    } else if (
        (compMove === 'scissors' && userMove === 'paper') 
        || (compMove === 'paper' && userMove === 'rock')
        || (compMove === 'rock' && userMove === 'lizard')
        || (compMove === 'lizard' && userMove === 'spock')
        || (compMove === 'spock' && userMove === 'scissors')
        || (compMove === 'scissors' && userMove === 'lizard')
        || (compMove === 'lizard' && userMove === 'paper')
        || (compMove === 'paper' && userMove === 'spock')
        || (compMove === 'spock' && userMove === 'rock')
        || (compMove === 'rock' && userMove === 'scissors')      
        ) {
            printed += ' ,Computer wins!';
    } else if (
        (userMove === 'scissors' && compMove === 'paper') 
        || (userMove === 'paper' && compMove === 'rock')
        || (userMove === 'rock' && compMove === 'lizard')
        || (userMove === 'lizard' && compMove === 'spock')
        || (userMove === 'spock' && compMove === 'scissors')
        || (userMove === 'scissors' && compMove === 'lizard')
        || (userMove === 'lizard' && compMove === 'paper')
        || (userMove === 'paper' && compMove === 'spock')
        || (userMove === 'spock' && compMove === 'rock')
        || (userMove === 'rock' && compMove === 'scissors')      
        ) {
            printed += ' ,User wins!';
    }
    return printed;
}

console.log('Super bonuses for rock paper scissors');
console.log(gameOn(randomMoveBonuses(),randomMoveBonuses()));