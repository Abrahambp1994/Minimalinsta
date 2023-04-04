# Minimalinsta APP Backend

# Instalar 🔥

> abierta la carpeta de backend en VSC, comenzar instalando los node modules

```
npm install
```

> renombrar el .env.example a .env y rellenar todos los campos

DATABASE_NAME se llamará instasimple

> crear la DB

```
npm run initDb
```

> introducir datos de prueba en la DB (users, posts y likes)

```
npm run populateDb
```

> una vez hecho todo esto, iniciar el server

```
node src/server.js o npm start o npm run dev
```

# Base de datos 💾

## Tablas

users

- id
- email
- password
- name

posts

- id
- image
- description
- userId
- creationDate

likes

- id
- userId
- postId

# API 📚

La colección de endpoints funcionando para postman: [está aquí](./Minimalinsta.postman_collection.json).

// USUARIOS PÚBLICOS

**GET /**

- Responde con las últimas fotos publicadas por los usuarios registrados.
- /?description= podemos realizar búsquedas filtrando por la descripción de las publicaciones mediante query.params

**GET /post/:id**

- Responde con un único post según su id.

**GET /users/:id**

- Responde con el perfil de un usuario (que no es lo mismo que MI usuario) con su galería de fotos

**POST /login**

- Inicia sesión a través del email y la password y nos devuelve un token.

**POST /register**

- Registra a cualquier usuario anónimo medante su name, email y password

//USARIOS REGISTRADOS

**GET /user**

- Iniciada la sesión, nos devuelve nuestra galeria de posts publicados por nosotros mismos, es decir MI perfil

**POST /post**

- Iniciada la sesión, crea una publicación introduciendo una description y una foto, ambas obligatorias

**POST /posts/:id/like**

- Iniciada la sesión, alterna dar/quitar like al post indicado en el param "id"
