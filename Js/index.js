"strict mode";
//funktion för search
let mySearch = document.querySelector(".search");

mySearch.onkeyup = () => {
  let input, filter, ul, li, i, txtValue;

  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("ulID");
  li = ul.getElementsByClassName("liClass");

  for (i = 0; i < li.length; i++) {
    searchFilter = li[i].getElementsByTagName("h3")[0];
    txtValue = searchFilter.textContent || searchFilter.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
