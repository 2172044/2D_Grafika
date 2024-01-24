export function gbrTitik(imageData,x,y,r,g,b){
    //let [r,g,b]= warna;

    let index= 4*(x+(y*imageData.width));
    imageData.data[index]=r;
    imageData.data[index+1]=g;
    imageData.data[index+2]=b;
    imageData.data[index+3]=255;
}