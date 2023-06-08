const Jimp = require("jimp");

async function resize() {
  // Function name is same as of file name
  // Reading Image
  const image = await Jimp.read("./img/rubber-ducky.jpg");
  image
    .resize(40, 40, function (err) {
      if (err) throw err;
    })
    .write("./resize.jpeg");
}

resize(); // Calling the function here using async
console.log("Image is processed successfully");
