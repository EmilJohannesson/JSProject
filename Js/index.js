"strict mode";
//funktion för search
let mySearch = document.querySelector(".search");
mySearch.addEventListener("keyup", searchPoke);

function searchPoke() {
  var input, filter, ul, li, a, i, txtValue;

  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("ulID");
  li = ul.getElementsByClassName("liClass");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//function för dropdown
let btnProfil = document.querySelector(".profile");
let dropdownProfile = document.querySelector(".dropdown-profile");
let ddProfil = document.querySelector("#dd-profil");

btnProfil.onclick = function () {
  ddProfil.classList.toggle("show");
};
