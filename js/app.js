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
  // imageFileName.dataset.index = index1;

  var index2 = getRandom();
  while (index2 === index1) {
    index2 = getRandom();
  }
  addImg("img/"+imageNames[index2]);
  // imageFileName.dataset.index = index2;

  var index3 = getRandom();
  while (index3 === index2 || index3 === index1) {
    index3 = getRandom();
  }
  addImg("img/"+imageNames[index3]);
  // imageFileName.dataset.index = index3;
}



// counter = 0
var totalClick = 0;
var index1 = 0;
var index2 = 0;
var index3 = 0;

// function to record click
function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked: "+imageSource);

  index1++;
  index2++;
  index3++;
  console.log(index1);
  console.log(index2);
  console.log(index3);

  totalClick++; // total click counter
  console.log(totalClick);

  document.getElementById('counterText').innerHTML = "Vote Counter: " + totalClick + " of 15"; // Show # of 15 text

  showImages();
}


// window event listener
window.addEventListener("load", showImages);
console.log("end");
