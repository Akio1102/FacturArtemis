import Querys from "../db/database.js";

export const getFacturasDetalle = async (req, res) => {
  const sql = `SELECT * FROM facturadetalle`;
  Querys(res, [sql]);
};

export const getFacturaDetalleID = async (req, res) => {
  const { FacturaID, ProductoID } = req.params;
  const sql = `SELECT * FROM facturadetalle WHERE FacturaID = ? AND ProductoID = ?`;
  Querys(res, [sql, FacturaID, ProductoID]);
};

export const postFacturaDetalle = async (req, res) => {
  const { FacturaID, ProductoID, PrecioUnitario, Cantidad, Descuento } =
    req.body;
  const facturadetalle = {
    FacturaID,
    ProductoID,
    PrecioUnitario,
    Cantidad,
    Descuento,
  };
  const sql = `INSERT INTO facturadetalle SET ?`;
  Querys(res, [sql, facturadetalle]);
};

export const putFacturaDetalle = async (req, res) => {
  const { FacturaID, ProductoID } = req.params;
  const { PrecioUnitario, Cantidad, Descuento } = req.body;
  const facturadetalle = {
    PrecioUnitario,
    Cantidad,
    Descuento,
  };
  const sql = `UPDATE facturadetalle SET ? WHERE FacturaID = ? AND ProductoID = ?`;
  Querys(res, [sql, facturadetalle, FacturaID, ProductoID]);
};

export const deleteFacturaDetalle = async (req, res) => {
  const { FacturaID, ProductoID } = req.params;
  const sql = `DELETE FROM facturadetalle WHERE FacturaID = ? AND ProductoID = ?`;
  Querys(res, [sql, FacturaID, ProductoID]);
};
