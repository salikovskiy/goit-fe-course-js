import axios from "axios";
import template from "../assets/template.hbs";
import "../style.css";

const key = "14450933-d0f1a699d902287387897d7a1";
const button = document.querySelector("#btn-v");
const gallery = document.querySelector(".gallery");
const search = document.querySelector(".search");

const state = {
  currentPage: 1,
  inputValue: ""
};

// -------------- getting data

const getData = (input, page) => {
  return axios(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=12&key=${key}`
  ).then(({ data }) => data.hits);
};

// -------------- input listener

search.addEventListener("submit", e => {
  e.preventDefault();
  state.inputValue = search.query.value;
  state.currentPage = 1;
  getData(state.inputValue, state.currentPage).then(
    data => (gallery.innerHTML = template(data))
  );
});

// ------------- button event listeber
button.addEventListener("click", () => {
  state.currentPage += 1;
  getData(state.inputValue, state.currentPage)
    .then(data => {
      gallery.insertAdjacentHTML("beforeend", template(data));
    })
    .then(() => {
      setTimeout(() => {
        const position = button.offsetTop;
        window.scrollTo({
          top: position,
          behavior: "smooth"
        });
      }, 500);
    });
});
