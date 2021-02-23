"strict mode";

let pokemonSearch = document.querySelector(".pokemonsearch");

pokemonArray = [];

fetchPokemon();

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((response) => response.json())
    .then((pokemonData) =>
      pokemonData.results.forEach((pokemon) => {
        let url = pokemon.url;
        fetch(url)
          .then((response) => response.json())
          .then((pokeData) => pokemonArray.push(pokeData));
      })
    );
  setTimeout(function () {
    console.log(pokemonArray);
    console.log(pokemonArray[0]);

    let text, i;

    plength = pokemonArray.length;

    text = "</ul>";
    for (i = 0; i < pokemonArray.length; i++) {
      text += "<li>" + pokemonArray[i].name + "</li>";
    }
    text += "</ul>";
    pokemonSearch.innerHTML = text;
  }, 1000);
}
