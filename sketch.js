let port;
let connectBtn;
let textData = [];
let currentText = "";
let testImage;



function setup() {
  createCanvas(400, 400);
  background(220);

  testImage = loadImage("assets/key.png");
  bgpic = loadImage("assets/background.png");


// text post part setup
  let input = createInput('');
  input.position(30, 30);
  input.size(300);
  input.id('text-field');
  input.attribute('disabled', 'true');
  let button = createButton('post');
  button.position(350, 30);
  button.id('submit-button');
  button.attribute('disabled', 'true');

//microbit connect part set up
  // in setup, we can open ports we have used previously
  // without user interaction
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

function draw() {
  background(220);
  textData.forEach((el, i) => {
  fill(0);
  textSize(10);
  text(el, 20, 80 + i * 20);
  });

  // image(testImage,0,0,100,100);
  // image(bgpic,100,100,100,100);
  connectMicroDraw();
}


function connectMicroDraw(){
  // this makes received text scroll up
  copy(0, 0, width, height, 0, -1, width, height);

  // reads in complete lines and prints them at the
  // bottom of the canvas
  let str = port.readUntil("\n");
  if (str.length > 0) {
    // text(str, 10, height-20);
    text('here is text', 10,height-20)
  }

  // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html('Connect to Micro:bit');
    // connectBtn.draw();
  } else {
    connectBtn.html('Disconnect');
  }
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
