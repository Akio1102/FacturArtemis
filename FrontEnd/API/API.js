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
