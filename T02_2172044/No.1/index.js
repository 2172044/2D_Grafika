
import * as mylib from "../lib/graf.js"

var myCanvas;
myCanvas = document.querySelector(".canvas1");
var ctx;
ctx = myCanvas.getContext("2d");
var myImageData = ctx.getImageData(0,0,myCanvas.width,myCanvas.height);

//bangun1
for (let i = 0; i < 100; i++) {
    for (let j = 0; j <= i; j++) {
        mylib.gbrTitik(myImageData, 100+i,100-j, 0, 0, 255);
}}

for (let i = 0; i < 100; i++) {
    for (let j = 0; j <100; j++) {
        mylib.gbrTitik(myImageData, 200+i,1+j, 0, 0, 255);
}}

for (let i = 0; i < 100; i++) 
{for (let j = 0; j <= i; j++) {
    mylib.gbrTitik(myImageData, 200+i,100-j, 255, 255, 255);
}}
  




//bangun2

for (let i = 0; i < 50; i++) {
    for (let j = 0; j <= i; j++) {
        mylib.gbrTitik(myImageData, 100+i,200-j, 0, 0, 255);
}}

for (let i = 0; i < 50; i++) {
    for (let j = 0; j <50; j++) {
        mylib.gbrTitik(myImageData, 150+i,151+j, 0, 0, 255);
}}





ctx.putImageData(myImageData, 0, 0);