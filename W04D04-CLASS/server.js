const express = require("express");
const app = express();
app.use(express.static('public')); 

app.set('view engine', 'ejs')

const fruits = require('./models/fruits')

app.get('/', (req,res) => {
    res.render('index');
});


app.use(express.urlencoded({extended:false}));
// app.use((res,req,next) => {
//     console.log('use is run')
// });


// get all fruits
app.get('/fruits', (req,res) => {
    res.render('fruits', {Allfruits: fruits});
});

// create a new friut
app.get('/fruits/new', (req, res) => {
    res.render('new');
});

// add new friut 

app.post('/fruits', (req, res) => {
    if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true
  } else { // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false
  }
    let fname = 
    fruits.push(
        {name:req.body.name,
            color:req.body.color,
            readyToEat:req.body.readyToEat
        })
    res.redirect('/fruits')
    res.render('new');
})

app.get("/fruits/apples", (req, res) => {
    arr = [];
        fruits.forEach(element => {
        if (element.type === "apple"){
            arr.push(element)  
        }
        });
        res.render('show.ejs', { fruit: arr  })});
        
// get single fruit
app.get('/fruits/:id', (req,res) => {
    var id = req.params.id
    console.log(id)
    console.log(fruits[id])
    res.render('show.ejs', { fruits: fruits[id]  });
});

app.listen(3000, ()=> {
    console.log("I am listening for requests!!!");
   });
