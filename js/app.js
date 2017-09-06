console.log("start");

// var imageNames = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];


// constructor
var product = function(productName) {
  this.productName = productName;
  this.counter = 0;
}

// image objects
var images = [];
images.push(new product ('bag.jpg'));
images.push(new product ('banana.jpg'));
images.push(new product ('boots.jpg'));
images.push(new product ('chair.jpg'));
images.push(new product ('cthulhu.jpg'));
images.push(new product ('dragon.jpg'));
images.push(new product ('pen.jpg'));
images.push(new product ('scissors.jpg'));
images.push(new product ('shark.jpg'));
images.push(new product ('sweep.jpg'));
images.push(new product ('unicorn.jpg'));
images.push(new product ('usb.jpg'));
images.push(new product ('water_can.jpg'));
images.push(new product ('wine_glass.jpg'));


// function to add image
function addImg(imageFileName) {
  var container = document.getElementById("imageContain");
  var image = document.createElement("img");
  image.src = "img/" +imageFileName.productName;
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
  addImg(images[index1]);
  // imageFileName.dataset.index = index1;

  var index2 = getRandom();
  while (index2 === index1) {
    index2 = getRandom();
  }
  addImg(images[index2]);
  // imageFileName.dataset.index = index2;

  var index3 = getRandom();
  while (index3 === index2 || index3 === index1) {
    index3 = getRandom();
  }
  addImg(images[index3]);
  // imageFileName.dataset.index = index3;
}


// counter = 0
var totalClick = 0;


// function to record click
function recordClick(event) {
  var imageSource = event.target.src; // get path to image
  console.log('imageSource:', imageSource);


  var clickProductName = imageSource.split('img/'); // split image
  console.log('clickProductName:', clickProductName);
  console.log('clickProductName:', clickProductName[1]);

  // loop until find product name
  var index = 0;
  while (clickProductName[1] !== images[index].productName){
    index++;
  }

  // counter add to image clicked
  var click = images[index];
  click.counter++; //
  console.log(click.counter);

  totalClick++; // total click counter
  console.log(totalClick);

  document.getElementById('counterText').innerHTML = "Vote Counter: " + totalClick + " of 15"; // Show # of 15 text

  showImages();
}


// window event listener
window.addEventListener("load", showImages);
console.log("end");
