const { selectPostById } = require("../../respositories/posts");
const { postIdSchema } = require("../../schema/posts");

const getSinglePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await postIdSchema.validateAsync(id);
    const post = await selectPostById(id, req.auth);
    res.send({
      status: "ok",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getSinglePost;
