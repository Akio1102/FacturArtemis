import { Categories } from "../Views/Categorias.js";

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  Categories();

  const myData = document.querySelector(".elimina");
  myData.addEventListener("click", (e) => {
    e.preventDefault();
    let myData = myData.getAttribute("id");
    console.log(e);
    const action = e.target.dataset.accion;
    const container = e.target.closest(".tr");

    console.log(container);
    const id = container.getAttribute("id");
    console.log(id);
    if (action === "eliminar") {
      DELETECategoria(container, id);
      alert("Categoría borrada");
    }
  });
});

let myFormCategoria = document.querySelector(`#myFormCategoria`);
myFormCategoria.addEventListener("submit", (e) => {
  console.log(e);
  let accion = e.submitter.dataset.accion;
  if (accion === "enviar") {
    POSTCategoria(e);
    window.location.href = "./categorias.html";
  } else {
    alert(`No se puede agregar Datos Vacios`);
  }
});
