const { generateError } = require("../../utils");
const {
  selectUserById,
  selectPostsFromUser,
} = require("../../respositories/users");

const myUser = async (req, res, next) => {
  try {
    const id = req.auth.id;
    const user = await selectUserById(id);
    if (!user) {
      generateError("User doesn't exist", 404);
    }
    const postsFromUser = await selectPostsFromUser(id, req.auth);
    user.posts = postsFromUser;
    res.status(200).send({ status: "ok", data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = myUser;
