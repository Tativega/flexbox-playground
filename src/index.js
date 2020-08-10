import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const inputJ = document.querySelectorAll(".justify");
const inputA = document.querySelectorAll(".align");
const inputWr = document.querySelectorAll(".wrap");
const inputW = document.querySelectorAll(".cWidth");
const inputH = document.querySelectorAll(".cHeigth");
const inputD = document.querySelectorAll(".direction");
const jContainer = document.getElementById("container-justify");
inputJ.forEach((element) => {
  element.addEventListener("click", (e) => {
    jContainer.style.justifyContent = e.target.value;
  });
});

inputA.forEach((element) => {
  element.addEventListener("click", (e) => {
    jContainer.style.alignItems = e.target.value;
  });
});

inputW.forEach((element) => {
  element.addEventListener("change", (e) => {
    const nBox = e.target.classList[1]
    const box = document.getElementById(nBox);
    console.log(e.target.value)
    box.style.width = `${e.target.value}px`
  });
});

inputH.forEach((element) => {
  element.addEventListener("change", (e) => {
    const nBox = e.target.classList[1]
    const box = document.getElementById(nBox);
    console.log(e.target.value)
    box.style.height = `${e.target.value}px`
  });
});

inputD.forEach((element) => {
  element.addEventListener("click", (e) => {
    jContainer.style.flexDirection = e.target.value;
  });
});

inputWr.forEach((element) => {
  element.addEventListener("click", (e) => {
    jContainer.style.flexWrap = e.target.value;
  });
});
// console.log(inputW)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
