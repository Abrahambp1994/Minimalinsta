const selectUserByEmail = require("./selectUserByEmail");
const selectUserById = require("./selectUserById");
const insertUser = require("./insertUser");
const selectPostsFromUser = require("./selectPostsFromUser");

module.exports = {
  selectUserByEmail, insertUser, selectUserById, selectPostsFromUser
};