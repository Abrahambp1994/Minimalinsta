# 2-Proyecto-Hack-a-Boss

# Quick start 🔥

> hacer clone del repositorio

```
git clone git@github.com:Abrahambp1994/instasimple.git
```

> abrir carpeta "instasimple" con Visual Studio

```
code ./instasimple
```

> en la terminal del VS (o cualquier terminal en la carpeta instasimple):

```
npm install
```

> renombrar el .env.example a .env y rellenad todos los campos con vuestros datos

❗ \_en DATABASE_NAME deberéis poner el nombre de una base de datos que ya tengáis creada en MySQL

> crear la DB

```
npm run initDb
```

> introducir datos de prueba en la DB

```
npm run populateDb
```

> una vez hecho todo esto, solo quedaría iniciar el server

```
node src/server.js
```

# Base de datos 💾

## Tablas

users

- id
- email \*
- password \*
- name \*

posts

- id
- title \*
- description \*
- userId \*
- image \*

likes

- id
- image \*
- postId \*

# API 📚

//USUARIOS ANÓNIMOS

- GET /posts

  - Responde con las últimas fotos publicadas por otros usuarios.

- GET /users/:id

  - Responde con el perfil del usuario con su galería de fotos

  - Body (form-data):
    - title \*
    - description \*
    - images
  - Responde con los datos del post creado, incluídas las imágenes

- GET /posts

  - Devuelve fotos relacionadas con el texto descriptivo introducido.

- POST /login

  - Body (JSON):

    - email \*
    - password \*

    - Responde con un token para el usuario

- POST /users

  - Body (JSON):
    - email \*
    - password \*
    - name \*
  - Responde con los datos del usuario creado

//USARIOS REGISTRADOS

- POST /posts

  - Se necesita autenticación del usuario

  - Crea una publicación introduciendo los siguientes valores en el body (form-data):
  
    - image \*
      -description \*

- POST /posts/:id/like

  - Alterna dar/quitar like al post indicado en el param "id"

  - Responde indicando si se ha dado o quitado el like
