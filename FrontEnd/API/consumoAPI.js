const headers = new Headers({ "Content-Type": "application/json" });
const URL = `http://localhost:4000/api/`;
// Geters
export const GETCategorias = async () => {
  try {
    const result = await fetch(`${URL}categorias`);
    const datos = await result.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
};

export const POSTCategoria = async (event) => {
  try {
    let data = Object.fromEntries(new FormData(event.target));
    let config = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    };

    let peticion = await fetch(`${URL}categorias`, config);
    data = await peticion.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function DELETECategoria(event, id) {
  let data = Object.fromEntries(new FormData(event.target));
  let config = {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}categorias/${id}`, config);
  datos = await peticion.json();
}
