"use scrpit";

let pokeApiUrl = new URL("https://pokeapi.co/api/v2/pokemon/1");

(async function () {
  let out = document.querySelector("#pokemonlist");
  const serverResponse = await fetch(pokeApiUrl);
  const pokemonInfo = await serverResponse.json();

  //out.innerText = pokemonInfo.pokemon;

  console.log(JSON.stringify(pokemonInfo, null, " "));
})();
