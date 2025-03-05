"use strict";

const gallery = [
  {
    title: "San Junipero Open-Air Gallery : Santa Madre Tierra (2003)",
    imgurl: "./images/gallery-section/nature-mural.jpg",
  },
  {
    title: "San Junipero Open-Air Gallery : La paz es la única solución (2023)",
    imgurl: "./images/gallery-section/peace-mural.jpg",
  },
  {
    title: "San Junipero National Museum : Tukuy ñawi ñan (1967)",
    imgurl: "./images/gallery-section/shaman-mural.jpg",
  },
  {
    title: "San Junipero Open-Air Gallery : Dulce Libertad, (1942)",
    imgurl: "./images/gallery-section/freedom-mural.jpg",
  },
  {
    title: "San Junipero Open-Air Gallery : Pachamanta rimanakuna, (1943)",
    imgurl: "./images/gallery-section/agro-mural.jpg",
  },
  {
    title: "San Junipero National Museum : Ancient cave painting (3000 BC)",
    imgurl: "./images/gallery-section/cave-mural.jpg",
  },
  {
    title: "San Junipero Gallery of Modern Art : Genesis (2002)",
    imgurl: "./images/gallery-section/genesis-mural.jpg",
  },
  {
    title: "San Junipero Open-Air Gallery : Termina en amor (1991)",
    imgurl: "./images/gallery-section/love-mural.jpg",
  },
  {
    title: "San Junipero Open-Air Gallery : Thus Spoke Zarathustra (1994)",
    imgurl: "./images/gallery-section/zarathustra-mural.jpg",
  },
];

const gallerySection = document.getElementById("gallery-section");
const muraldesc = document.getElementById("desc-line");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let i = 0;

gallerySection.style.backgroundImage = `url("${gallery[i].imgurl}")`;
muraldesc.textContent = gallery[i].title;

leftArrow.addEventListener("click", function () {
  if (i == 0) {
    i = gallery.length - 1;
  } else {
    i--;
  }
  console.log("left-clicked");
  gallerySection.style.backgroundImage = `url("${gallery[i].imgurl}")`;
  muraldesc.textContent = gallery[i].title;
});

rightArrow.addEventListener("click", function () {
  if (i == gallery.length - 1) {
    i = 0;
  } else {
    i++;
  }
  console.log("right-clicked");
  gallerySection.style.backgroundImage = `url("${gallery[i].imgurl}")`;
  muraldesc.textContent = gallery[i].title;
});


$(".about-tabs-list-items a").on("click", function (event) {
  event.preventDefault(); 

  var targetId = $(this).attr("href");

  // Calculate the target offset with an offset of, for example, 50 pixels from the top
  var targetOffset = $(targetId).offset().top - 70;

  // Scroll to the target element with the calculated offset
  $('html, body').animate({
    scrollTop: targetOffset
  }, 1000);
});