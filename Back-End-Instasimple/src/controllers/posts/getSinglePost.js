const { selectPostById } = require("../../respositories/posts");
const { postIdSchema } = require("../../schema/posts");

const getSinglePost = async (req, res, next) => {
  try {
    await postIdSchema.validateAsync(req.query);

    const { id } = req.params;
    const post = await selectPostById(id);

    res.send({
      status: "ok",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getSinglePost;
