let express = require('express')
let {Pool} = require('pg')
let cors = require('cors')
let bodyParser = require('body-parser')

let app = express()
app.use(cors())
app.use(bodyParser.json())

const pool = new Pool({
    user:"cruzgonzalez",
    host:"localhost",
    database:"pokemon",
    password:"Password",
    port:"5432"
});


//used to add a pokemon to DB
app.post('/addPokemon', (req, res) => {
    const pokeName = req.body.pokeName;
    const pokeType = req.body.pokeType;
    const pokeMove = req.body.pokeMove;

    pool.query(
        "INSERT INTO pokemon(pokename, type, move) VALUES ($1, $2, $3)",
        [pokeName, pokeType, pokeMove],
        (err, result) => {
            if(err){
                console.log(err)
            }
            else{
                res.send(result)
            }
        }

    )
})


//used to show all pokemon AddPokemon.js
app.get('/getAllPokemon', (req, res) => {
     
    pool.query("SELECT * from pokemon", (err, result) => {
        if(err){
            console.log(err);
        }
        else {
            res.send(result)
        }
    })
})


app.listen(5000, () => {
    console.log("Your app is listening on port 5000")
})