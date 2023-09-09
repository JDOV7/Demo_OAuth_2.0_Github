import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import oauthRouter from "./oauth/auth_router.js";
import productosRouter from "./Produtos/index.js";
import db from "./Config/db.js";

const app = express();

// app.use("/oauth", oauthRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

try {
  await db.authenticate();
  db.sync();
  console.log("conexion correcta a la db");
} catch (error) {
  console.log(error);
}

const dominiosPermitidos = [process.env.FRONTEND_URL, "https://localhost:3001"];
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
    // if (dominiosPermitidos.indexOf(origin) !== -1) {

    //   callback(null, true);
    // } else {
    //   callback(new Error("No permitdo por CORS"));
    // }
  },
};

app.use(cors(corsOptions));

app.use("/oauth", oauthRouter);
app.use("/productos", productosRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Corriendo en el puerto: ${process.env.PORT}`);
});

app.use((req, res, next) => {
  res.status(400).json({
    status: 400,
    message: "Recurso no encontrado",
    data: {},
  });
});

/***
 * 
 * 
 * 
 * 
 * openapi: 3.0.0
info:
 description: USER API
 version: 1.0.0
 title: A User API
 host: localhost:3000
 basePath: /api/v1
 schemes:
  - http

tags:
  - name: users
    description: Display details of users
paths:
  /users:
    get:
      tags:
        - users
      summary: Obtiene todos los usuarios
      description: Obtiene todos los usuarios existentes
      operationId: usersGet
      responses: 
        "200":
          description: Successful operation
        '404':
          description: User no encontrado
  
    post:
      tags:
        - users
      summary: Crea un usuario nuevo
      description: Crea un usuario nuevo
      operationId: usersPost
      responses: 
        "200":
            description: Successful operation
        '400':
            description: Operacion fallida
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/NuevoUser'
        required: true
components:
  schemas:
    NuevoUser:
      required:
        - userName
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 10
        userName:
          type: string
          example: Nadia
 * 
 * 
 * 
 * 
 * **/
