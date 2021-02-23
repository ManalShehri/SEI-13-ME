// 0 to 10
console.log("part1");
for( var i = 0 ; i <= 10 ; i++) {
    console.log(i);
}

// 4 to -16
console.log("part2");
for( var i = 4 ; i >= -16 ; i--) {
    console.log(i);
}
console.log("part3");

// 8 to 41
console.log("part4");
for( var i = 8 ; i <= 41 ; i = i + 5) {
    console.log(i);
}

// For every `number` between 1 and 100...
console.log("part5");
for( var i = 1 ; i <= 100 ; i++) {
// If the `number` is evenly divisible by 3 AND evenly divisible by 5, print "Fizzbuzz"
    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log(i,'Fizzbuzz');
    }
// If the `number` is evenly divisible by 5, print "Buzz"
    else if (i % 5 == 0 ){
        console.log(i,"Buzz");
    }
// If the `number` is evenly divisible by 3, print "Fizz"
    else if (i % 3 == 0 ){
        console.log(i,"Fizz");
    }
}

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
console.log("part5");
for ( var i =0 ; i<=20 ; i++) {
    if (i % 2 == 0) {
        console.log(i, ' is even');
    }
    else {
        console.log(i, 'is odd');
    }
}

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
console.log("part6");
for ( var i =0 ; i<=10 ; i++) {
    console.log(i*9);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
console.log("part7");
var table = [];
var result;
for ( var i =0 ; i<=10 ; i++) {
    for ( var j =0 ; j<=10 ; j++) {
        result = i*j;
    }
    table.push(result);
}
    console.log(table);

// Grade Assigner
console.log("part8");
var arr = [];
for ( var i = 60 ; i <= 100 ; i++) {
    arr.push(i);
}
for ( var i = 0 ; i < arr.length ; i++) {

    if(arr[i]>= 60 && arr[i] < 70) 
    {
        console.log(arr[i],'you got a D');
    } else if(arr[i]>= 70 && arr[i] < 80)  {
        console.log(arr[i],'you got a C');
    }else if(arr[i]>= 80 && arr[i] < 90)  {
        console.log(arr[i],'you got a B');
    }else if(arr[i]>= 90 && arr[i] <= 100)  {
        console.log(arr[i],'you got a A');
    }
}
console.log(arr);


