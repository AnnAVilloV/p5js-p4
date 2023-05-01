let state = 0;
let fishimage;
let anglerimage;
let bgpic;

function setup(){
    // createCanvas(400, 400);
    createCanvas(displayWidth, displayHeight);
    fishimage = loadImage("assets/fish.PNG");
    anglerimage = loadImage("assets/anglerfish.png");
    bgpic = loadImage("assets/background.png");
    gfb = loadImage("assets/GFB.png");
}


function draw(){
    //state = 0,连接; state = 1, 主界面
    // if(state == 0){

    // }else if(state == 1){

    // }
    image(bgpic,0,0,displayWidth,displayHeight);
    image(fishimage,displayWidth*0.05,0, fishimage.width*0.4, fishimage.height*0.4);
    image(anglerimage,displayWidth*0.5, displayHeight*0.3, anglerimage.width*0.8, anglerimage.height*0.8);
    image(gfb,displayWidth*0.8, displayHeight*0.05,gfb.width*0.12,gfb.height*0.12);

}