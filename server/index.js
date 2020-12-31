//When building a server with Node.js and Express.js, you need to do the following:
//1. Require Express - const express = require('express');
//2. Initialize an instance of express and save it to a variable - const app = express();
//3. Use middleware to invoke your JSON parser - app.use(express.json());
//4. Use app.listen to define where the server should listen for requests - 
//   app.listen(4444, () => console.log(`Server running on 4444`))

const express = require('express'),
    grassCtrl = require('./controllers/grassCtrl'),
    pokeCtrl = require('./controllers/pokemonCtrl'),
    app = express(),
    port = 4444;

app.use(express.json());

app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

//pokeCtrl endpoints
//End points can be the same as long as the methods (get, post) are different!
app.get('/api/caught-pokemon', pokeCtrl.getCaughtPokemon);
app.post('/api/caught-pokemon', pokeCtrl.catchPokemon);

app.listen(port, () => console.log(`Your server is running on ${port}`))
