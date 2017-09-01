console.log("start");

var imageNames = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];

function addImg(imageFileName) {
  var container = document.getElementById("imageContain");
  var image = document.createElement("img");
  image.src = imageFileName;
  container.appendChild(image);
}


// function getRandom() {
//   var index = Math.floor(Math.random() * 14);
// }

function showImages() {
  var index = Math.floor(Math.random() * 14)
  addImg("img/"+imageNames[index]);

  index = Math.floor(Math.random() * 14)
  addImg("img/"+imageNames[index]);

  index = Math.floor(Math.random() * 14)
  addImg("img/"+imageNames[index]);
}


window.addEventListener("load", showImages);
console.log("end");
