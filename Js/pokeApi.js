"strict mode";

let pokemonSearch = document.querySelector(".pokemonsearch");
let pokemonImage = document.querySelector(".pokemon-image");

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
    //console.log(pokemonArray);
    //console.log(pokemonArray[0]);

    let text = "<ul class='ulClass' id='ulID'>";
    for (i = 0; i < pokemonArray.length; i++) {
      text += 
      `
      <li class='liClass'>
      <a href='#' class='pokemonSearchA'>
      <div class = 'pokemon-card'>
         <h3>${pokemonArray[i].name}</h3>
         <img src='${pokemonArray[i].sprites.front_default}'>
         <div class = 'pokemon-stats'>
         <h5>Type:</h5>
         <p>${pokemonArray[i].types[0].type.name}</p>
          <h5>HP: </h5>
          <p>${pokemonArray[i].stats[0].base_stat}</p>
          <h5>Attack:</h5>
          <p>${pokemonArray[i].stats[1].base_stat}</p>
          <h5>Defense:</h5>
          <p>${pokemonArray[i].stats[2].base_stat}</p>
         </div>
      </div>
      </a> 
      </li>
      `
    }
    text += "</ul>";
    pokemonSearch.innerHTML = text;

    //createElement-img
    //få in den i div??
    //add edventlistener - funktion som sker när jag click <li> på pokemonlist-name
  }, 1000);
}
