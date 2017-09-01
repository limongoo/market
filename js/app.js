console.log("start");

var imageNames = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];

// function to add image
function addImg(imageFileName) {
  var container = document.getElementById("imageContain");
  var image = document.createElement("img");
  image.src = imageFileName;
  container.appendChild(image);
}

// random function
function getRandom() {
  return Math.floor(Math.random() * 14);
} // end function

// function to randomize image
function showImages() {
  var index1 = getRandom();
  addImg("img/"+imageNames[index1]);

  var index2 = getRandom();
  addImg("img/"+imageNames[index2]);
    while (index2 === index1) {
      index2 = getRandom();
    }

  var index3 = getRandom();
  addImg("img/"+imageNames[index3]);
    while (index3 === index2 || index3 === index1) {
      index3 = getRandom();
    }
} //end function


window.addEventListener("load", showImages);
console.log("end");
