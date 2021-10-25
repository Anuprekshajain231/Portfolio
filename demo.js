/*
  to flip the card
*/
const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", () => {
  arr.classList.add("active_arr");
  if (left_container.classList.contains("off")) {
    left_container.classList.remove("off");
    left_container.classList.add("active");
  }
});

clc.addEventListener("click", () => {
  arr.classList.remove("active_arr");
  if (left_container.classList.contains("active")) {
    left_container.classList.remove("off");
    left_container.classList.add("off");
  }
});
/*
  for popping up the about  sections                  
*/

function togglepopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

/*
  for popping up the technical skills sections                  
*/

function togglepopup1(){
  document.getElementById("popup-2").classList.toggle("active");
}


/*
  for popping up the technical skills sections  
*/

function togglepopup2(){
  document.getElementById("popup-3").classList.toggle("active");
}