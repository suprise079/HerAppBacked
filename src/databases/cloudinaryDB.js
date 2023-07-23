const { config } = require("dotenv");
const cloudinary = require("cloudinary").v2;

const CloudinaryClient = () => {
  config();

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  console.log(cloudinary.config());

  return cloudinary;
};

module.exports = { CloudinaryClient };
