import "./style.css";
import template from "./template.hbs";
import templateLoad from "./templateLoad.hbs";
import debounce from "lodash.debounce";
import "pnotify/dist/PNotifyBrightTheme.css";
import PNotify from "pnotify/dist/es/PNotify";
import PNotifyButtons from "pnotify/dist/es/PNotifyButtons";

//------------getting data

const getData = async input => {
  const url = `https://restcountries.eu/rest/v2/name/${input}`;
  const responce = await fetch(url);
  const data = await responce.json();
  return data;
};

//------------changing UI

const input = document.querySelector("input");
const answer = document.querySelector("section");

const updateUI = dataGet => {
  if (dataGet.length === 1) {
    const data = dataGet[0];
    const html = template(data);
    answer.innerHTML = html;
    PNotify.closeAll();
  } else if (dataGet.length > 10) {
    PNotify.error({
      text: "Too many matches found. Please enter a more specific query"
    });
    answer.innerHTML = "";
  } else {
    const htmlLoad = templateLoad(dataGet);
    answer.innerHTML = htmlLoad;
    PNotify.closeAll();
  }
};

input.addEventListener(
  "input",
  debounce(e => {
    const value = input.value.trim();
    if (value !== "") {
      getData(value)
        .then(data => updateUI(data))
        .catch(err => console.log(err.message));
    }
  }),
  500
);
