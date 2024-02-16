const { Router } = require('express');

/*requiero todos los handlers de pokemons*/
const {
    getPokemonsHandler,
    getPokemonIdHandler,
    createPokemonHandler
} = require ('../handlers/pokemonHandler')

const pokemonsRouter = Router();

pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', getPokemonIdHandler);
pokemonsRouter.post('/', createPokemonHandler);


module.exports = pokemonsRouter;