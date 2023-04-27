
let dark_mode_btn = document.getElementsByClassName("dark_mode_btn");
console.log(dark_mode_btn);
function darkModeFunc() {
  let page = document.getElementsByTagName("body");
  // page[0].style.backgroundColor = "darkgray";
  $(page).toggleClass("apply_dark_mode");

  let texts = document.querySelectorAll("p, a, h1, h2, td, title, li");
  for (obj of texts) {
    obj.style.color = "white";
  }

  let recipeBackground = document.querySelector(".recipe_inner_container");
  recipeBackground.style.backgroundImage = "none";
}
dark_mode_btn[0].addEventListener("click", darkModeFunc)


