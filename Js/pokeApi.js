"strict mode";

let pokemonSearch = document.querySelector(".pokemonsearch");
let pokemonImage = document.querySelector(".pokemon-image");

let pokemonArray = [];
const promises = [];

fetchPokemon();

function fetchPokemon() {
  //gå igenom alla pokemon och sedan pusha promise till promises
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  //när alla promises är OK, gör detta (pusha till en array).
  Promise.all(promises).then((res) => {
    res.forEach((pokemon) => {
      pokemonArray.push(pokemon);
    });
    //kör funktionen som lägger in dem i sidan
    outputPokemon();
  });
}

function outputPokemon() {
  let text = "<ul class='ulClass' id='ulID'>";
  for (i = 0; i < pokemonArray.length; i++) {
    text += `
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
      `;
  }
  text += "</ul>";
  pokemonSearch.innerHTML = text;
}
