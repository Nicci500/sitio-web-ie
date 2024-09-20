function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  pixelDensity(5);
}

function draw() {
  background(0);
  push();
  translate(width/2, height/2);
  let radio =200;
  stroke(255);
  strokeWeight(0.5);
  
  for (let i = 0; i < 360; i++){
    let x =cos(i)*radio;
    let y =sin(i)*radio;
    let a = cos(frameCount*0.05*i);
    let b = sin(frameCount*0.05*i)*radio;
    
    line (x,y,a,b);
  }
  

}