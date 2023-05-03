let fishimage;
let anglerimage;
let bgpic;
let gfb;
let eel1;
let eel2;
let eel3;
let eel4;
let bubble;

let gr, wr;
let rabbit;
let greytouch,whitetouch;

let connectBtn;
let port;

let textData = [];
let outTem = [];
let inTem = [];
let outHumi = [];
let inHumi = [];

let hue;
let sat;
let bri;

let hueInt;let satInt;let briInt;

let temp;



function setup(){
    // createCanvas(400, 400);
    setupPic();
    setupMicro();
    temp = displayWidth*0.5;
}

function draw(){
    background(220);

        drawPic();
        drawMicro();
        textData.forEach((el, i) => {
            let bwidth = bubble.width*0.015*el.length;
            image(bubble,displayWidth*0.33+displayWidth*0.1*i, displayHeight*0.25-displayHeight*0.13*i, bwidth,bubble.height*0.4);
            fill(255);
            textSize(bubble.height*0.04);
            text(el, displayWidth*0.35+displayWidth*0.1*i+bwidth*0.2, displayHeight*0.25-displayHeight*0.13*i+bubble.height*0.2);
            });
        hueF = parseFloat(hue);
        satInt = int(sat);
        briInt = int(bri);
        drawLight();

        if(greytouch == 1){
            drawRabbit(1);
        }else if(whitetouch == 1){
            drawRabbit(2);
        }

}

function drawLight(){
    // image(anglerimage,displayWidth*0.55, displayHeight*0.3, anglerimage.width*0.8, anglerimage.height*0.8);
    colorMode(HSB, 360, 100, 100);
 
    noStroke();
    if(hue != null){
        fill(hueF, satInt, briInt);
        // fill(140,28,77);
        circle(displayWidth*0.55+anglerimage.width*0.09, displayHeight*0.3+anglerimage.height*0.31, 90);
    }
    // fill(0);
    // text(hue, displayWidth*0.55+anglerimage.width*0.09, displayHeight*0.3+anglerimage.height*0.31);
}

function setupMicro(){
    //micro connect set up
    port = createSerial();
    let usedPorts = usedSerialPorts();
    if (usedPorts.length > 0) {
      port.open(usedPorts[0], 115200);
    }
    // any other ports can be opened via a dialog after
    // user interaction (see connectBtnClick below)
    connectBtn = createButton('Connect to Micro:bit');
    connectBtn.position(displayWidth*0.9, displayHeight*0.25);
    connectBtn.mousePressed(connectBtnClick);

    let sendBtn = createButton('Send hello');
    sendBtn.position(displayWidth*0.9, displayHeight*0.32);
    sendBtn.mousePressed(sendBtnClick);
}

function connectBtnClick() {
    if (!port.opened()) {
      port.open('MicroPython', 115200);
    } else {
      port.close();
    }
  }

  function sendBtnClick() {
    port.write("Hello from p5.js\n");
  }  

function drawMicro(){
    // this makes received text scroll up
    // copy(0, 0, width, height, 0, -1, width, height);
  
    // reads in complete lines and prints them at the
    // bottom of the canvas
    let str = port.readUntil("\n");
    if (str.length > 0) {
      // text(str, 10, height-20);
      fill(255);
      text('here is text', 300,300);
    }
  
    // changes button label based on connection status
    if (!port.opened()) {
      connectBtn.html('Connect to Micro:bit');
      // connectBtn.draw();
    } else {
      connectBtn.html('Disconnect');
    }
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

    bubble = loadImage("assets/bubble.png")

    wr = loadImage("assets/white.png");
    gr = loadImage("assets/grey.png");
    
}

function drawPic(){
    let temGrewH = displayHeight*0.4/20;
    let humiGrewH = displayHeight*0.4/60;

    let h1 = 0;
    if(int(outTem)>=10){
        h1 = (int(outTem)-10)*temGrewH;
    }
    let h2 = 0;
    if(int(inTem)>=10){
        h2 = (int(inTem)-10)*temGrewH;
    }
    let h3 = 0;
    if(int(outHumi)>=30){
        h3 = (int(outHumi)-30)*humiGrewH;
    }
    let h4 = 0;
    if(int(inHumi)>=30){
        h4 = (int(inHumi)-30)*humiGrewH;
    }


    image(bgpic,0,0,displayWidth,displayHeight);
    image(anglerimage,displayWidth*0.55, displayHeight*0.3, anglerimage.width*0.8, anglerimage.height*0.8);
    image(gfb,displayWidth*0.85, displayHeight*0.05,gfb.width*0.12,gfb.height*0.12);
    image(fishimage,displayWidth*0.05,0, fishimage.width*0.4, fishimage.height*0.4);
    
    image(eel1, displayWidth*0.01, displayHeight*0.8-h1, eel1.width*0.3,eel1.height*0.3);
    image(eel2, displayWidth*0.13-10, displayHeight*0.8-h2, eel2.width*0.3,eel2.height*0.3);
    image(eel3, displayWidth*0.24, displayHeight*0.8+10-h3, eel3.width*0.3,eel3.height*0.3);
    image(eel4, displayWidth*0.35 -30, displayHeight*0.8-h4, eel4.width*0.3,eel4.height*0.3);

    fill(255);
    
    textSize(eel1.width*0.02);
    text("Outside Temperature",displayWidth*0.01, displayHeight*0.8-h1);
    text("Inside Temperature",displayWidth*0.12, displayHeight*0.8-h2);
    text("Outside Humidity",displayWidth*0.24, displayHeight*0.8-h3);
    text("Inside Humidity",displayWidth*0.35, displayHeight*0.8-h4);

    textSize(eel1.width*0.03);

    text(outTem + "℃",displayWidth*0.02, displayHeight*0.83-h1);
    text(inTem + "℃",displayWidth*0.13, displayHeight*0.83-h2);
    text(outHumi,displayWidth*0.25, displayHeight*0.83-h3);
    text(inHumi,displayWidth*0.36, displayHeight*0.83-h4);


}

function drawRabbit(num){
    rabbit = gr;
    if(num == 2){
        rabbit = wr
    }
    image(rabbit,temp,displayHeight*0.6,rabbit.width*0.5, rabbit.height*0.5);
}