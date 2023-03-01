const { insertPost } = require("../../respositories/posts");
const { createPostSchema } = require("../../schema/posts");
const { processAndSaveImage } = require("../../utils");

const createPost = async (req, res, next) => {
  try {

    const userId = req.auth.id;

    await createPostSchema.validateAsync(req.body);

    const { description } = req.body;

    let image = req.files?.image;

    const imageName = await processAndSaveImage(image.data);

    const insertedPostId = await insertPost({
      description,
      userId,
      imageName
    });

    res.status(201).send({
      status: "ok",
      data: {
        id: insertedPostId,
        description,
        userId,
        imageName,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createPost;