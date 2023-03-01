const { selectPosts } = require("../../respositories/posts");
const { filterPostsSchema } = require("../../schema/posts");

const getPosts = async (req, res, next) => {
  try {
    await filterPostsSchema.validateAsync(req.query);
    const posts = await selectPosts(req.query, req.auth);
    res.status(200).send({ status: "ok", data: posts });
  } catch (error) {
    next(error);
  }
};

module.exports = getPosts;
