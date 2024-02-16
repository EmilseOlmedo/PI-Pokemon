const {createPokemon, getPokemonById, getAllPokemons, getPokemonByName} = require ('../controllers/pokemonControllers')

const getPokemonsHandler = async(req, res) => {
    const {name} = req.query;
    try {
        const pokemons = (name) ? await getPokemonByName(name) : await getAllPokemons() 
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const getPokemonIdHandler = async (req, res) => {
    const {id} = req.params;
//verifico si el id es Number (api) o alfanumérico UUID (BDD)
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemonId = await getPokemonById(id, source)
        res.status(200).json(pokemonId);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const createPokemonHandler = async (req, res)=>{
    const {name, life, attack} = req.body;
    try {
        const newPokemon = await createPokemon(name, life, attack);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getPokemonsHandler,
    getPokemonIdHandler,
    createPokemonHandler,
}