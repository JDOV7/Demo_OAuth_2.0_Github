import { DataTypes } from "sequelize";
import db from "../Config/db.js";

const Productos = await db.define("Productos", {
  IdProductos: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Precio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Productos;
