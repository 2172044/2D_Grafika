import * as mylib from "../lib/graf.js"

var myCanvas;
myCanvas = document.querySelector(".canvas1");
var ctx;
ctx = myCanvas.getContext("2d");
var myImageData = ctx.getImageData(0,0,myCanvas.width,myCanvas.height);


for (let i=0; i<200; i++){
    for (let j=0; j<200; j++)
    if(j<=25){
        mylib.gbrTitik (myImageData,100+i,100+j,25,0,0)
       

    }
    else if(j<=50){
        mylib.gbrTitik (myImageData,100+i,100+j,50,0,0)
    }
    else if(j<=75){
        mylib.gbrTitik (myImageData,100+i,100+j,75,0,0)
    }
    else if(j<=100){
        mylib.gbrTitik (myImageData,100+i,100+j,100,0,0)
    }
    else if(j<=125){
        mylib.gbrTitik (myImageData,100+i,100+j,125,0,0)
    }
    else if(j<=150){
        mylib.gbrTitik (myImageData,100+i,100+j,150,0,0)
    }
    else if(j<=175){
        mylib.gbrTitik (myImageData,100+i,100+j,175,0,0)
    }
    else{
    mylib.gbrTitik(myImageData,100+i,100+j,200,0,0)
    }
   }

ctx.putImageData(myImageData, 0, 0);