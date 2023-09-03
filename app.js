const express = require("express");
const path = require("path");
// const dateFormat = require("date-format");
const app = express();
const config = require("./config.js");
const oauthRouter = require("./oauth");
// const userRouter = require("./User");

// app.use(express.urlencoded());
// app.use(express.json({}));

// const LoggerMiddleware = (req, res, next) => {
//   console.log(`<------------------------------------------------>`);
//   console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
//   console.log("--BODY--");
//   console.log(req.body);
//   console.log(`<------------------------------------------------>`);
//   next();
// };
// app.use(LoggerMiddleware);
app.use(express.static("static"));

app.get("/", (req, res) => {
  console.log("index----------------");
  res.sendFile(path.join(__dirname, "/static/index.html"));
});

app.use("/oauth", oauthRouter);

app.listen(config.PORT, () => {
  console.log(`Server inciaido port: ${config.PORT}`);
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
