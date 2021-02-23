const express = require('express'); 
const app = express(); 
let PORT = 4000;
const Pokemon = require('./models/pokemon.js')

app.use(express.urlencoded({extended:false}));

app.use(express.static('public')); 
// get all Pokemons in index
app.get("/pokemon/edit/:id", (req, res) => {
    console.log('edit')
    res.render('new.ejs', {data: Pokemon})
});

app.get('/pokemon/new', (req, res)=>{
    res.render('new.ejs', {data: Pokemon})
    console.log('data1')
});

app.post('/pokemon/new', (req, res)=>{
    let newPokemon = Pokemon.push(
        {
        id:req.body.pid,
        name: req.body.pname
        }
    );
    res.redirect('/')
});

app.get('/pokemon/view/:id', (req, res) => {
    var id = req.params.id
    let data = Pokemon[0]
    Pokemon.forEach((ele) => {
        if (ele.id === id)
        {
            data = ele;
        }
        });
    res.render('show.ejs', { data: data });
});

app.get('/', (req, res)=>{
    res.render('index.ejs', {data: Pokemon})
});


app.listen(PORT, () => {
    console.log("I am listening.....");
});
