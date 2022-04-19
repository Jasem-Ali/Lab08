let image1 = "./images/waterfall.jpeg";
let image2 = "./images/field.jpeg";
let image3 = "./images/C++.png";
let image4 = "./images/mansion.jpeg";
let image5 = "./images/JS.png";

let images = [image1, image2, image3, image4, image5];
let currentIndex = 0;
let currentImage = document.getElementById("image");

currentImage.src = images[currentIndex];

function previous() {
    if (currentIndex == 0)
        currentIndex = 4;
    else currentIndex -= 1;

    currentImage.src = images[currentIndex];
}

function next() {
    if (currentIndex == 4)
        currentIndex = 0;
    else currentIndex += 1;

    currentImage.src = images[currentIndex];
}