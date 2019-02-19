let x = 0, y = 0, xw = 0, yw = 0,r,offset=1000,drawn=300,hue=0;
function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(80);
}

function randgp(max) {
  return random(max);
}

function draw() {
	  if (hue > 360) {
   	 hue = 0;
	} else {
  	  hue+=5;
	}
  	translate(-75,-35);
  	map(width+100,height+35,width,height);
  for(let i =0;i<drawn;i++){
  	r = randgp(100);
    if (r <= 1) {
      xw = 0;
      yw = 0.16 * y;
    } else if (r <= 8) {
      xw = 0.2 * x - 0.26 * y;
      yw = 0.23 * x + 0.22 * y + 1.6;
    } else if (r <= 15) {
      xw = -0.15 * x + 0.28 * y;
      yw = 0.26 * x + 0.24 * y + 0.44;
    } else {
      xw = 0.85 * x + 0.04 * y;
      yw = -0.04 * x + 0.85 * y + 1.6;
    }
    x = xw;
    y = yw;
    colorMode(HSL, 360);
  	noStroke();
		fill(hue, 200, 200);
    strokeWeight(0.1);
    ellipse(x * 50 + 260+offset*y*3/height, -y * 50 + 540, 2, 2);
  }
}