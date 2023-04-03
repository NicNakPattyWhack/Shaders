let rippleShader;

function setup() {
  createCanvas(400, 400);

  rippleShader = loadShader("shader.vert", "shader.frag");
}

function draw() {
  background(220);
  
  shader(rippleShader);
}
