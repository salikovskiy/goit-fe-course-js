"use sctrict";

import images from "./gallery-items.js";

// let li = document.createElement("LI");
//   li.innerText = elem;
//   ul.appendChild(li);

const ul = document.querySelector(".gallery");
const refs = {
  lightBox: document.querySelector(".js-lightbox"),
  lightContent: document.querySelector(".lightbox__content"),
  lightImage: document.querySelector(".lightbox__image")
};
// ----------------------------- variant 1
let string = "";
images.forEach(image => {
  string += `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;
});

ul.insertAdjacentHTML("afterbegin", string);

// ----------------------------- variant 2

// images.forEach(image => {
//   const li = document.createElement("LI");
//   const a = document.createElement("A");
//   const img = document.createElement("IMG");
//   const span = document.createElement("SPAN");
//   const i = document.createElement("I");

//   li.setAttribute("class", "gallery__item");
//   //-------------------------a
//   a.setAttribute("class", "gallery__link");
//   a.setAttribute("href", image.original);
//   //-------------------------img
//   img.setAttribute("class", "gallery__image");
//   img.setAttribute("src", image.preview);
//   img.setAttribute("data-source", image.original);
//   img.setAttribute("alt", image.description);
//   //-------------------------span-icon
//   span.setAttribute("class", "gallery__icon");
//   i.setAttribute("class", "material-icons");
//   i.textContent = "zoom_out_map";

//   ul.appendChild(li);
//   li.appendChild(a);
//   a.appendChild(img);
//   a.appendChild(span);
//   span.appendChild(i);
// });

const clickFunc = e => {
  e.preventDefault();

  const target = e.target;
  //   console.log(target.className);
  if (target.nodeName === "IMG") {
    refs.lightBox.classList.add("is-open");
    refs.lightImage.setAttribute("src", target.dataset.source);
  }
};

const lightFunc = (e, b) => {
  e.preventDefault();

  const target = e.target;
  if (
    target.nodeName === "BUTTON" ||
    target.nodeName === "I" ||
    target.nodeName !== "IMG"
  ) {
    refs.lightBox.classList.remove("is-open");
    refs.lightImage.setAttribute("src", "");
  }
};

const liImage = document.querySelectorAll(".gallery__image");

const lightEsc = e => {
  if (e.key === "Escape") {
    refs.lightBox.classList.remove("is-open");
    refs.lightImage.setAttribute("src", "");
  }
};

refs.lightBox.addEventListener("click", lightFunc);
window.addEventListener("keydown", lightEsc); // ------ запитати чи так правильно звертатися до всього window?
ul.addEventListener("click", clickFunc);

// if (e.key === "ArrowRight") {
//     console.log(refs.lightImage.dataset.source);
//   }
let arr = [];
images.forEach(elem => {
  arr.push(elem.original);
});

const lightArrow = e => {
  if (e.key === "ArrowRight") {
    let i = arr.indexOf(refs.lightImage.src);
    if (i < 8) {
      refs.lightImage.setAttribute("src", arr[i + 1]);
    } else {
      i = -1;
      refs.lightImage.setAttribute("src", arr[i + 1]);
    }
  } else if (e.key === "ArrowLeft") {
    let i = arr.indexOf(refs.lightImage.src);
    if (i === 0) {
      i = 9;
      refs.lightImage.setAttribute("src", arr[i - 1]);
    } else {
      refs.lightImage.setAttribute("src", arr[i - 1]);
    }
  }
};
window.addEventListener("keydown", lightArrow); // ------ запитати чи так правильно звертатися до всього window?
