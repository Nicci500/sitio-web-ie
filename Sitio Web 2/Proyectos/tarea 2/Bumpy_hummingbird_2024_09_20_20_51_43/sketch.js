let numPelotitas = 15;
let margen = 20;
let tamano;
let espaciado;

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  
}

function draw() {
  background(240);
  espaciado = (width-margen*2)/ (numPelotitas - 1);
  
  for(y = 0;y<numPelotitas; y++){
    for(x=0;x<numPelotitas;x++){
      
      tamano = random (0,5);
      
      fill(2, random(255) );
      rect(margen+x*espaciado,margen+y*espaciado,tamano);
    }
  }

}
