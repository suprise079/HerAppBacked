const { CloudinaryClient } = require("../databases/cloudinaryDB.js");

exports.uploadImage = async (path, id, folderName) => {
  const cloudinary = CloudinaryClient();

  let response = await cloudinary.uploader
    .upload(path, { public_id: id, folder: folderName, overwrite: true })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log("Error uploading: " + JSON.stringify(e));
    });

  return response;
};
