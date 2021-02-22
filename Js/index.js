"strict mode";

//funktion för search

//function för dropdown
let btnProfil = document.querySelector(".profile");
let dropdownProfile = document.querySelector(".dropdown-profile");
let ddProfil = document.querySelector("#dd-profil");

btnProfil.onclick = function () {
  ddProfil.classList.toggle("show");
};
