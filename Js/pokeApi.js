"strict mode";

let pokemonSearch = document.querySelector(".pokemonsearch");
let pokemonImage = document.querySelector(".pokemon-image");

let pokemonArray = [];

fetchPokemon();

function fetchPokemon() {
  const promises = [];
  //gå igenom alla pokemon och sedan pusha promise till promises
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  //när alla promises är OK, gör detta (pusha till en array).
  Promise.allSettled(promises).then((res) => {
    res.forEach((pokemon) => {
      if (pokemon.status === "fulfilled") {
        pokemonArray.push(pokemon.value);
      }
    });
    //kör funktionen som lägger in dem i sidan
    outputPokemon();
  });
}

function outputPokemon() {
  try {
    let text = "<ul class='ulClass' id='ulID'>";
    for (i = 0; i < pokemonArray.length; i++) {
      text += `
      <li class='liClass'>
     
      <div class = 'pokemon-card id = ${pokemonArray[i].types[0].type.name}'>
      <img src= '${pokemonArray[i].sprites.other.dream_world.front_default}'>
         <h3>${
           pokemonArray[i].name[0].toUpperCase() + pokemonArray[i].name.slice(1)
         } </h3>
         <hr>
         <div class = 'pokemon-stats'>
            <h5>Type:</h5>
            <p>${pokemonArray[i].types[0].type.name}</p>
            <hr>
            <h5>HP: </h5>
            <p>${pokemonArray[i].stats[0].base_stat}</p>
            <hr>
            <h5>Attack:</h5>
            <p>${pokemonArray[i].stats[1].base_stat}</p>
            <hr>
            <h5>Defense:</h5>
            <p>${pokemonArray[i].stats[2].base_stat}</p>
         </div>
      </div>
    
      </li>
      `;
    }
    text += "</ul>";
    pokemonSearch.innerHTML = text;
  } catch {
    console.log("DOM error");
  }
}
