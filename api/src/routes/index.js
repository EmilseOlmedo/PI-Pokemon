const { Router } = require('express');
const router = Router();
const pokemonsRouter = require('./pokemonsRoutes');
const typesRouter = require('./typesRoutes');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon', pokemonsRouter);
router.use('/type', typesRouter);

// const {
//     getPokemon,
//     getId,
//     postPokemon,
//   } = require("../controller/pokemon.controller");



// router.get("/index", getAllPokemons);
// router.get("/:id", getPokemonById);
// router.get("/:name", getPokemonByName);
// router.get("/:types", getPokemonByTypes);
// router.post("/create", postPokemon);

module.exports = router;
