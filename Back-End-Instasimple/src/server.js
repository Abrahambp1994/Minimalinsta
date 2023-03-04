require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// CONTROLLERS: POSTS
const { createPost, getPosts, getSinglePost } = require("./controllers/posts");

// CONTROLLERS: USERS
const {
  loginUser,
  createUser,
  getUserGallery,
  myUser,
} = require("./controllers/users");

// CONTROLLERS: LIKES
const { togglePostLike } = require("./controllers/likes");

// MIDDLEWARES
const { handleError, handleNotFound, validateAuth } = require("./middlewares");
const isUser = require("./middlewares/isUser");

const app = express();
app.use(cors());

const { PORT } = process.env;

app.use(express.json());
app.use(fileUpload());
app.use("/uploads", express.static("./uploads"));

// PUBLIC ENDPOINTS

app.use(validateAuth);

// GET POSTS
app.get("/", getPosts);

// GET SINGLE POST
app.get("/post/:id", getSinglePost);

// GET USER
app.get("/users/:id", getUserGallery);

// LOG IN
app.post("/login", loginUser);

// REGISTER
app.post("/register", createUser);

// PRIVATE ENDPOINTS

// GET MY USER
app.get("/user", isUser, myUser);

// POST A PHOTO
app.post("/post", isUser, createPost);

// POST A LIKE
app.post("/posts/:id/like", isUser, togglePostLike);

// ERROR MIDDLEWARE

app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
