import { Categories } from "./render.js";

const categories = document.querySelector("#categories");

categories.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  Categories();
});
