var angle = 0;

var slider;

function setup() {
  // put setup code here
  createCanvas(400,400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);   // stroke('white');
  translate(200, height);
  branch(100);
}


function branch(len) {
  // var len = 100;
  // line(200, height, 200, height-len);
  line(0,0,0, -len);
  translate(0,-len);
  // line(0,0,0, -len*0.67)
  if (len > 4)  {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
