"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Pega a seção corazon
  const sectionCorazon = document.querySelector(".hero__corazon");

  //Ao clicar na seção, aciona função
  sectionCorazon.addEventListener("click", acionarCorazon);
});

function acionarCorazon() {
  //   console.log("funcionando");
  const heroCorazon = document.querySelector(".hero__corazon");
  //   console.log(mariana, martin);
  heroCorazon.classList.toggle("hero__corazon--is-active");
}
