const caughtPokemon = [];
let id = 1;

module.exports = {
    getCaughtPokemon: (req, res) => {
        res.status(200).send(caughtPokemon);
    },
    catchPokemon: (req, res) => {
        const { pokemon } = req.body;

        pokemon.id = id;
        id++;

        caughtPokemon.push(pokemon);
        res.status(200).send(caughtPokemon);
    },
    editName: (req, res) => {

    },
    releasePokemon: (req, res) => {

    }
}