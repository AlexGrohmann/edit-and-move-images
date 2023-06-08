const Jimp = require("jimp");

async function resize(file) {
  // Reading Image
  const image = await Jimp.read("./img/" + file);
  image
    //image.resize( w, h[, mode] );     // resize the image. Jimp.AUTO can be passed as one of the values.
    .resize(40, Jimp.AUTO, function (err) {
      if (err) throw err;
    })
    .write("./" + file);

  image.write("./demo/" + file);

  console.log("created: " + file);
}

const fs = require("fs");

const startPath = "./img/";

fs.readdir(startPath, (err, folder) => {
  console.log(folder);

  folder.forEach((file) => {
    console.log("found:", file);
    resize(file);
  });
});
