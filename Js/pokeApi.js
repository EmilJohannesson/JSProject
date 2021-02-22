"strict mode";

let pokemonSearch = document.querySelector(".searchList");

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then((response) => response.json())
  .then((pokemonData) =>
    pokemonData.results.forEach((pokemon) => fetchPokemonStats(pokemon))
  );

function fetchPokemonStats(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then((pokeData) => {
      //console.log(pokeData);
      const pokemonInfo = {};
      pokemonInfo["name"] = pokeData.name;
      console.log(pokemonInfo);
    });
}
