// map map map !! 
// 1 - conver it into an array of objects => [{name : "yasir" } , ..... ] 
var array = ["yasser" , "Saad" , "eber" , "atheer"]

// var objects = // use map

let objects = array.map((ele) => {
  return {name: ele};
})



console.log('objects', objects)

// =========================================================================================
// 2-Make me a array where only ages of objects => [27 , 27.23 , ....]
var array1 = [{name : "yasser" , age : 21} , {name : "ebere" , age : 27.23 },
{name : "nahid" , age : 29 } , {name : "Ahmed" , age : 31 }  , {name : "Atheer" , age : 25 }  ]

var AgesOfages = array1.map(ele => {
  return ele.age

}) 




console.log('AgesOfages', AgesOfages)

// =========================================================================================
// 3 - add id into this objects inside the array => [{name: "yasir" , age : 27  , id : 1} , ...] 
var array3 = [{name : "yasser" , age : 21} ,  {name : "Khalid" , age : 31 } ,{name : "ebere" , age : 27.23 },
{name : "nahid" , age : 29 } ,  {name : "Atheer" , age : 25 }  ]

var arrayWithId = array3.map((ele, i ) => {
  array3 = ele
  array3.id = i;
  return array3
})



console.log('arrayWithId', arrayWithId)

// =========================================================================================
//  4 - import the array of student from the students.js file and : 
// add to objects gifts  => [{name:'Khulod'  , Gender :'female' , gift :"Flower" }, ..... ]
// if Gender female the gift is Flower and if Gender male the gift is Coffee .

// import { students } from './students'

// require('./students')
var studentsWithGifts = students.map(
  (ele, i ) => {
    if (ele.Gender === 'female')
    {
      students.gift = 'Flower'
    }
    else 
    {
      students.gift = 'Coffee'

    }
    return students
  }
)




// console.log(studentsWithGifts)


//   ========================================================================================
//                              !!+!!!+!  Bonus !+!!!+!! 
// أ - use only map! to conver the sentence to array of objects like =>[{name: "yasser" , age : 27  , id : 1} , ...]
// and no undfinde plz !  
var isThatArray = "Yasser 21 Abdulrahman 31 Adel 27 Abdulaziz 29 Atheer 25"

names = []
ages = []
newArr = isThatArray.split(' ').map((ele,i) => { return i%2 === 0 ? names.push(ele) : ages.push(ele) })
let info = names.map((ele, i) => { return { name: ele, age: ages[i], id: i+1 }; })

console.log('info', info)



// ok you solve it ! what about this one ? 
// can you solve the bonus in one line ? 





// =========================================================================================
// ب  - Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() .
// see if you can use Ascii code to acomplish this
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz"
var shiftLetters = (string) =>{
    // code!
  
  };

  
//   console.log(shiftLetters("hello"))