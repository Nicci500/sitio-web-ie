let d;// Variable que almacenará el ángulo de rotación, calculado en función de la posición del mouse.
let div = 20; // Número de divisiones o simetrías (cuántos "brazos" tendrá la estructura).
let sym = 360 / div; // Calcula el ángulo que separa cada "brazo" de la estructura. Si `div` es 20, el ángulo será 18 grados (360 / 20).

function setup() {
  createCanvas(windowWidth, windowHeight);  // Crea un lienzo que ocupa todo el ancho y alto de la ventana del navegador.
  angleMode(DEGREES); // Cambia el modo de ángulo a grados, en lugar de radianes.
  pixelDensity(6); // Aumenta la densidad de píxeles para mejorar la calidad visual en pantallas de alta resolución.
}

function draw() {
  background(230);  // Dibuja un fondo negro con un valor de transparencia de 10, lo que crea un efecto de estela o desvanecimiento progresivo.
  stroke(0);

  d = map(mouseX, 0, width, 0, 90);   // Mapea la posición horizontal del mouse en el rango [0, width] al rango [0, 90], que se usará para controlar la rotación.

  for (i = 0; i < 360; i += sym) { // Bucle que repite el patrón rotado, aumentando `i` en cada paso según el valor de `sym`.
    push();                                
    translate(width / 2, height / 2); // Traslada el origen de coordenadas al centro del lienzo.
    rotate(i);// Rota el lienzo en función del valor de `i`, lo que genera las divisiones simétricas.
    branch(55);  // Llama a la función `branch` para dibujar la rama, con una longitud inicial de 50.
    pop(); // Restaura el estado previo de las transformaciones para evitar que las rotaciones y traslaciones afecten las siguientes iteraciones.
  }
}

function branch(br) {
  line(1, 100, 0, -br);  // Dibuja una línea vertical hacia arriba con longitud `br` desde el origen (0,0).
  translate(0, -br); // Mueve el origen de coordenadas al final de la línea, preparándose para dibujar la próxima rama.

  if (br > 12) { // Si la longitud de la rama es mayor a 12, se continúa con la recursión.
    push();
    rotate(d);  // Rota en el ángulo `d`, determinado por la posición del mouse.
    branch(br * 0.7); // Llama a la función recursiva `branch` con una longitud reducida al 70% de la anterior.
    pop();          

    push();           
    rotate(-d); // Rota en el ángulo opuesto `-d` para crear una segunda rama simétrica.
    branch(br * 0.9); // Llama a la función recursiva para dibujar otra rama, también al 70% del tamaño.
    pop(); 
  }
}