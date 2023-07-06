import { GETCategorias } from "../API/consumoAPI.js";
import { RowCategories } from "../Components/RowCategories.js";

const categories = document.querySelector("#categories");

export function Categories() {
  categories.innerHTML = "";
  viewCategories();
}

async function viewCategories() {
  try {
    let categories = await GETCategorias();
    console.log(categories);
    if (categories == false) {
      alert(`No hay Categorias`);
    } else {
      categories.forEach((element) => {
        RowCategories(element);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
