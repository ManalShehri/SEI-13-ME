// Write a function that will add two numbers and return the answer 
// add(1,2) should return 3

function add(a,b){
  // function code goes here
  return a + b;
}

// Write a function that will add or subtract two numbers and return the answer 
// calculator(1, 2, "add") should return 3 
// calculator(1, 2, "subtract")` should return -1

function calculator(a,b,operation){
  if (operation === 'add') 
  {
    return a + b;
  } else if (operation === 'subtract'){
    return a - b;
  }

}


// Write a function that will get the sum of the numbers between 1 and n and return the answer 
//summation(5) should return 15 because 1+2+3+4+5=15

function summation (a) {
  var result = 0 ;
  for (var i = 1; i<=a; i++)
  {
    result = result + i;
  }
  return result;

}


// Write a function to get the sum of all the even numbers in a group 
//summationEven(5) should return 6 because 2+4=6

function summationEven (num) {
  var result = 0;
  for (var i = 1; i<=num; i++)
  {
    if(i % 2 == 0)
    {
      result = result + i;
    }
  }
  return result;
}


// Write a function to reverse the letters in a word 
// reverse("caterpillar") should return "rallipretac"

function reverse(word) {
  var reverse = "";
  for (var i = word.length - 1; i >= 0; i--) { 
    reverse += word[i];
  }
  return reverse;
}


// Write a function that will count up to a number and back down and return a string of the climb 
// countUpAndDown(3) should return "1 2 3 2 1"

function countUpAndDown (a) {
  var result = '';
  for (var i= 1; i<=a; i++) 
  {
    result = result + ' ' + i;
  }
  for ( var i = a -1; i>0; i--) 
  {
      result = result + ' ' + i;
  }
  return result;
}


// Write a function that returns the longest word in sentence 
// longestWord("The cat in the house") should return "house"

function longestWord(word) {
  var Split = word.split(' '), longestWord = '', max = 0;

  for(var i = 0; i < Split.length; i++){
    if(Split[i].length > max){ 
      max = Split[i].length;
      longestWord = Split[i];
     }
  }
  return longestWord;
}




// --------  do not wite below this line  -----------
console.log(add(1,2) , " add(1,2) should return 3")

console.log(calculator(1, 2, "add"), 'calculator(1, 2, "add") should return 3' )
console.log(calculator(1, 2, "subtract"),'calculator(1, 2, "subtract") should return -1')

console.log(summation(5), 'summation(5) should return 15 because 1+2+3+4+5=15')

console.log(summationEven(5), 'summationEven(5) should return 6 because 2+4=6')

console.log(reverse("caterpillar"), 'reverse("caterpillar") should return "rallipretac"')

console.log(countUpAndDown(3), 'countUpAndDown(3) should return "1 2 3 2 1"')

console.log(longestWord("The cat in the house"), 'longestWord("The cat in the house") should return "house"')
