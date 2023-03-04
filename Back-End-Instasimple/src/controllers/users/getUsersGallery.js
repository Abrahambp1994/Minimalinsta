const { userIdSchema } = require("../../schema/users");
const {
  selectUserById,
  selectPostsFromUser,
} = require("../../respositories/users");
const { generateError } = require("../../utils");

const getUserGallery = async (req, res, next) => {
  try {
    const { id } = req.params;
    await userIdSchema.validateAsync(id);
    const user = await selectUserById(id);
    if (!user) {
      generateError("User doesn't exist", 404);
    }
    const postsFromUser = await selectPostsFromUser(id, req.auth); // AQUÍ OBTIENE LOS POSTS
    user.posts = postsFromUser;
    res.status(200).send({ status: "ok", data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserGallery;
