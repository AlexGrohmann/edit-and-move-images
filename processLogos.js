const Jimp = require("jimp");

async function resize(file) {
  // Function name is same as of file name
  // Reading Image
  const image = await Jimp.read("./img/" + file);
  image
    .resize(40, Jimp.AUTO, function (err) {
      if (err) throw err;
    })
    .write("./" + file);

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
