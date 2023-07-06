export function RowCategories(categories) {
  let tablaCategories = document.querySelector("#categories");
  tablaCategories.innerHTML += `
    <tr id="${categories.CategoriaID}">
        <td>${categories.CategoriaID}</td>
        <td>${categories.CategoriaNombre}</td>
        <td>${categories.Descripcion}</td>
        <td>${categories.Imagen}</td>
        <td>
          <button data-accion="editar" class="btn btn-warning" id="editCategoria" data-bs-toggle="modal" data-bs-target= "#modalPaisEdit">
            <i class="bi bi-pencil-square"></i> Editar
          </button> 
        </td>
        <td>
          <button data-accion="eliminar" class="btn btn-danger" id="eliminarCategoria">
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </td>
    </tr>
`;
}
