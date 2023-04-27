let items = document.getElementsByClassName("li");
let btn = document.getElementsByTagName("button");

function changeColor() {
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "green";
  }
}

btn[0].addEventListener("click", changeColor);


