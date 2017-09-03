console.log("start");

var imageNames = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];



// function to add image
function addImg(imageFileName) {
  var container = document.getElementById("imageContain");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}

// var index1 = document.createElement("img");
// var index2 = document.createElement("img");
// var index3 = document.createElement("img");


// random function
function getRandom() {
  return Math.floor(Math.random() * 14);
}

// function to randomize image
function showImages() {

  var container = document.getElementById("imageContain");
  container.innerHTML = "";

  var index1 = getRandom();
  addImg("img/"+imageNames[index1]);

  var index2 = getRandom();
  while (index2 === index1) {
    index2 = getRandom();
  }
  addImg("img/"+imageNames[index2]);

  var index3 = getRandom();
  while (index3 === index2 || index3 === index1) {
    index3 = getRandom();
  }
  addImg("img/"+imageNames[index3]);
}

// // Click event listener
// index1.addEventListener('click', recordClick);
// index2.addEventListener('click', recordClick);
// index3.addEventListener('click', recordClick);


// function to record click
function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked: "+imageSource);

  // var image = document.createElement("img");
  //
  // var index1 = document.getElementsByTagName("img");
  // console.log(index1);
  // var index2 = document.getElementsByTagName("img");
  // var index3 = document.getElementsByTagName("img");

  // index1.removeChild(image);
  // index2.removeChild(image);
  // index3.removeChild(image);

  showImages();
}


// window event listener
window.addEventListener("load", showImages);
console.log("end");
