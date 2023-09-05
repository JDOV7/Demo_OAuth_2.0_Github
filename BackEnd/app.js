import express, { json } from "express";
import dotenv from "dotenv";
const app = express();

// app.use("/oauth", oauthRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

app.get("/hola", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Hola",
    data: {},
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Corriendo en el puerto: ${PORT}`);
});

app.use((req, res, next) => {
  res.status(400).send("Recurso no encontrado");
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
