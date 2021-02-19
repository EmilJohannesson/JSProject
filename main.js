"use scrpit";

let pokeApiUrl = new URL("https://pokeapi.co/api/v2/pokemon/");

(async function () {
  let out = document.querySelector("#pokemonlist");
  const serverResponse = await fetch(pokeApiUrl);
  const pokemonInfo = await serverResponse.json();

  out.innerText = JSON.stringify(pokemonInfo, null, " ");
})();
