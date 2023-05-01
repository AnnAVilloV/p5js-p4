let state = 0;
let fishimage;
let anglerimage;
let bgpic;
let gfb;
let eel1;
let eel2;
let eel3;
let eel4;


function setup(){
    // createCanvas(400, 400);
    setupPic();


    port = createSerial();
    let usedPorts = usedSerialPorts();
    if (usedPorts.length > 0) {
      port.open(usedPorts[0], 115200);
    }
    // any other ports can be opened via a dialog after
    // user interaction (see connectBtnClick below)
    connectBtn = createButton('Connect to Micro:bit');
    connectBtn.position(80, 200);
    connectBtn.mousePressed(connectBtnClick);

    let sendBtn = createButton('Send hello');
    sendBtn.position(220, 200);
    sendBtn.mousePressed(sendBtnClick);
}


function draw(){
    //state = 0,连接; state = 1, 主界面
    if(state == 0){

    }else if(state == 1){
        drawPic();
        textData.forEach((el, i) => {
            fill(255);
            textSize(10);
            text(el, 20, 80 + i * 20);
            });
    }



    

}

function setupPort(){
    
}

function setupPic(){
    createCanvas(displayWidth, displayHeight);
    fishimage = loadImage("assets/fish.png");
    anglerimage = loadImage("assets/anglerfish.png");
    bgpic = loadImage("assets/background.png");
    gfb = loadImage("assets/GFB.png");
    eel1 = loadImage("assets/eel3.png");
    eel2 = loadImage("assets/eel1.png");
    eel3 = loadImage("assets/eel2.png");
    eel4 = loadImage("assets/eel4.png");
}



function drawPic(){
    image(bgpic,0,0,displayWidth,displayHeight);
    image(anglerimage,displayWidth*0.55, displayHeight*0.3, anglerimage.width*0.8, anglerimage.height*0.8);
    image(gfb,displayWidth*0.85, displayHeight*0.05,gfb.width*0.12,gfb.height*0.12);
    image(fishimage,displayWidth*0.05,0, fishimage.width*0.4, fishimage.height*0.4);
    
    image(eel1, displayWidth*0.05, displayHeight*0.8, eel1.width*0.4,eel1.height*0.4);
    image(eel2, displayWidth*0.15-10, displayHeight*0.8, eel2.width*0.4,eel2.height*0.4);
    image(eel3, displayWidth*0.25, displayHeight*0.8+10, eel3.width*0.4,eel3.height*0.4);
    image(eel4, displayWidth*0.35 -30, displayHeight*0.8, eel4.width*0.4,eel4.height*0.4);

    fill(255);
    
    text("Outside Temperature",displayWidth*0.1, displayHeight*0.8);
    text("Inside Temperature",displayWidth*0.2, displayHeight*0.8);
    text("Outside Humidity",displayWidth*0.3, displayHeight*0.8);
    text("Inside Humidity",displayWidth*0.4, displayHeight*0.8);
}