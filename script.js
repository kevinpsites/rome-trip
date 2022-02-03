let width = window.innerWidth;
let height = window.innerHeight;

const mapWindow = document.getElementById("map");

console.log(width, height, mapWindow);

mapWindow.width = width * 0.95;
mapWindow.height = height * 0.5;
