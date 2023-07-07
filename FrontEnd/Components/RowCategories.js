export function RowCategories(categories) {
  let tablaCategories = document.querySelector("#categories");
  tablaCategories.innerHTML += `
    <tr>
        <td>${categories.CategoriaID}</td>
        <td>${categories.CategoriaNombre}</td>
        <td>${categories.Descripcion}</td>
        <td>${categories.Imagen}</td>
        <td>
          <button data-accion="editar" class="btn btn-warning edita" id="${categories.CategoriaID}" data-bs-toggle="modal" data-bs-target= "#modalPaisEdit">
            <i class="bi bi-pencil-square"></i> Editar
          </button> 
        </td>
        <td>
          <button data-accion="eliminar" class="btn btn-danger elimina" id="${categories.CategoriaID}">
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </td>
    </tr>
`;
}
