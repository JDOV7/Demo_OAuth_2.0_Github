import Usuarios from "./Usuarios.js";
import Productos from "./Productos.js";

Productos.belongsTo(Usuarios, { foreignKey: "IdUsuarios" });

export { Usuarios, Productos };
