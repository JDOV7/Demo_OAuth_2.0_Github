import { DataTypes } from "sequelize";
import db from "../Config/db.js";

const Usuarios = await db.define("Usuarios", {
  IdUsuarios: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  IdGitHub: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
});

export default Usuarios;
