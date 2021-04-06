/* 1. Récupérer les éléments menu-btn, nav du dom */
var button = document.querySelector("#menu-btn");
var nav = document.querySelector("#nav");
/* 2. Ecouter le click sur le bouton */
button.addEventListener("click", () => {
  /* 3. Ajouter la classe active au bouton et à la nav */
  button.classList.toggle("active");
  nav.classList.toggle("active");
});
