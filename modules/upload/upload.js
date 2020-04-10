const multer = require("multer");
const fs = require('fs');
const fileType = require("file-type");

const upload = multer({
  dest:'images/', 
  limits: {fileSize: 10000000, files: 1},
  fileFilter:  (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new Error('Only Images are allowed !'), false);
    }
    callback(null, true);
  }
}).single('image');

exports.upload = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({message: err.message});
    } else {
      let path = `/images/${req.file.filename}`
      res.status(200).json({
        message: 'Image Uploaded Successfully !',
        path: path
      });
    }
  })
}

exports.images = (req, res) => {
  let imagename = req.params.imagename;
  let imagepath = `${app.get("root")}/images/${imagename}`;
  let image = fs.readFileSync(imagepath);
  let mime = fileType(image).mime;

  res.writeHead(200, {'Content-Type': mime });
  res.end(image, 'binary');
}

exports.imagesList = (req, res) => {
  res.send(fs.readdirSync(`${app.get("root")}/images/`));
}
