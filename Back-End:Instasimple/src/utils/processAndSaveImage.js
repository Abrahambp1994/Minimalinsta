const sharp = require("sharp");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs").promises;

const uploadsPath = path.join(__dirname, "..", "..", process.env.UPLOADS_DIR);

const processAndSaveImage = async (imageBuffer) => {

  await fs.mkdir(uploadsPath, { recursive: true });

  const image = sharp(imageBuffer);

  const imageMetadata = await image.metadata();
  
    image.resize(1080, 1080);

  const imageName = `${uuid.v4()}.${imageMetadata.format}`;


  const imagePath = path.join(uploadsPath, imageName);

  await image.toFile(imagePath);

  return imageName;
};

module.exports = processAndSaveImage;
