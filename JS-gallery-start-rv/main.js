let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

let btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');
let darkButton = document.querySelector(".dark");

let imageArray = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
for (let element of imageArray) {
    let newImage = document.createElement('img');
    newImage.setAttribute('src', element);
    thumbBar.appendChild(newImage);
    newImage.onclick = function () {
        displayedImage.setAttribute('src', element);
    }
}
let darkness = 0;
darkButton.onclick = function () {
    if (darkness == 0) {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        darkness = 1;
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        darkness = 0;
    }
}