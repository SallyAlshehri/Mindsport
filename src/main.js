// let switcherLis = document.querySelectorAll('.switcher li')
// let card = Array.from(document.querySelectorAll('.card'));

//  switcherLis.forEach((li) =>{
//     li.addEventListener("click" ,removeActive );
//     li.addEventListener("click" ,mangeCards );
//  })

//  // remove active from all Lis and add to the current
//  function removeActive(){
//     switcherLis.forEach((li)=>{
//         li.classList.remove("active");
//         this.classList.add("active")
//     })
//  }

// //mange imgs

// function mangeCards(){
//     card.forEach((card)=>{
//         card.style.display ="none"
//     })
//     document.querySelectorAll(this.dataset.class).forEach((el)=>{
//         el.style.display ="block"
//     })
// }
//menu nav

let toggler = document.querySelector(".toggle");
let menuToggle = document.querySelector(".menu-toggle");
let close = document.querySelector(".close");
toggler.onclick = function () {
  menuToggle.classList.toggle("open");
};
close.onclick = function () {
  menuToggle.classList.remove("open");
};
 

let switcherLis = document.querySelectorAll(".switcher li");
let card = Array.from(document.querySelectorAll(".card"));

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangeCards);
});

// remove active from all Lis and add to the current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

//mange imgs

function mangeCards() {
  card.forEach((card) => {
    card.style.display = "none";
  });
  document.querySelectorAll(this.dataset.class).forEach((el) => {
    el.style.display = "block";
  });
}
