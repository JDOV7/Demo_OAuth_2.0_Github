# OAuth 2.0 Github

## Tabla de Contenidos

1. [🚀 Informacion General](#-informacion-general)
2. [💻 Tecnologias](#-tecnologias)
3. [🛠️ Instalacion](#%EF%B8%8F-instalacion)

## 🚀 Informacion General

---

<p align="justify">
Este repositorio usa el protocolo OAuth 2.0 para la autorizacion de usuarios, el servidor de autorizacion usado es Github
</p>

<div align="justify">

🔓**Funcionalidades publicas:**

- Pagina principal
- Crear Cuenta


🔐**Funcionalidades privadas**:

- Home, se obtienen todos los productos creados
- Crear producto, muestra un formulario para crear un producto

</div>

## 💻 Tecnologias

---

<div align="center">

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node JS" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express JS" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/OAuth%202.0-badge?style=for-the-badge&logo=auth0&logoColor=%23EB5424&labelColor=black&color=black" alt="OAuth 2.0" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind_CSS" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />&nbsp;&nbsp;

</div>

🧠**Principales tecnologias usadas para el Back-End:**

- **NodeJS**: Version 18.14.2
- **Express**: Version 4.18.2

🎨**Principales tecnologias usadas para el Front-End:**

- **React**: Version *
- **Tailwind_CSS**: Version *
- **Vite**: Version *

💾**Bases de datos**:

☁️**Cloud**:

## 🛠️ Instalacion

---

<p align="justify">

Para la instalacion, debe de contar con `node 18.14.2` y luego seguir los pasos siguientes.

La aplicacion esta dividida en 2 proyectos, una API Rest y un Front-End.

📂 Para ejecutar el Back-End debe hacer lo siguiente:

</p>

```
$ git clone https://github.com/JDOV7/OAuth_2.0_Github.git
$ cd ../path/to/the/dir/Oauth2
$ npm install
$ npm run start
```

<p align="justify">

🔑El back-end requiere las siguientes `variables de entorno`:

</p>

```
PORT=
CLIENT_ID=
CLIENT_SECRET=
```

<p align="justify">
📂Para ejecutar el Front-End se debe hacer lo siguiente una vez clonado el repositorio:
</p>

```
$ cd ../path/to/the/dir/FrontEnd
$ npm install
$ npm run dev
```

<p align="justify">

🔑El front-end requiere las siguientes `variables de entorno`:

</p>

```
VITE_CLIENT_ID=
VITE_CLIENT_SECRET=
```

<p align="justify">
Previamente se debe de configurar su cuenta de GitHub para hacer uso del servicio OAuth
</p>
