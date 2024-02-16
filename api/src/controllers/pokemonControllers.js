const axios = require ("axios")
const {Pokemon} = require ('../db')



// const getPokemonById = async (id, source) => {
//     const pokeId = 
//         source === "api" 
//         ? (await axios.get (`https://pokeapi.co/api/v2/pokemon/${id}`)).data
//         : await Pokemon.findByPk(id);

//     return pokeId;
// };



const getPokemonById = async (id, source) => {
/*-------------obtengo POKEMON por ID desde la API-------------*/
  if (source === "api") {
    const pokeId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonIdApi = {
      id: pokeId.data.id,
      image: pokeId.data.sprites.other.home.front_default,
      name: pokeId.data.name,
      types: pokeId.data.types.map((t) => t.type.name),
      life: pokeId.data.stats[0].base_stat,
      attack: pokeId.data.stats[1].base_stat,
      defense: pokeId.data.stats[2].base_stat,
      speed: pokeId.data.stats[5].base_stat,
      height: pokeId.data.height,
      weight: pokeId.data.weight,
    };
    return pokemonIdApi;
  /*-------------obtengo POKEMON por ID desde la BDD-------------*/
  } else {
    const pokemonIdDb = await Pokemon.findByPk(id, {
    include: [
      {                    
      model: Type,       
      attributes: ["name"],       
      through: {
              attributes: []    
              }
            }
          ]});
    return pokemonIdDb;
  }
}




const createPokemon = async (name, life, attack) =>{
    await Pokemon.create({name, life, attack});
};


module.exports = { createPokemon, getPokemonById }