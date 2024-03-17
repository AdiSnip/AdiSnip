let button=document.querySelector(".button")
let box1=document.querySelector("#box1")
let box2=document.querySelector("#box2")
let box3=document.querySelector("#box3")
let mobmenu=document.querySelector(".mobmenu")
let menu=()=>{
  mobmenu.classList.toggle("slide")
  box1.classList.toggle("box1")
  box2.classList.toggle("box2")
  box3.classList.toggle("box3")
}
button.addEventListener("click",menu)