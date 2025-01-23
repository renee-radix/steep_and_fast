let pointNumber = 5;

// create one of these per spiky guy
let randomRadiuses = [];
let randomRadiuses2 = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 360/pointNumber; i++){
    // mess with these numbers to create different effects
    x = random(20) + 20;
    randomRadiuses.push(x);
  }
  for (let i = 0; i < 360/pointNumber; i++){
    // mess with these numbers to create different effects
    x = random(20) + 20;
    randomRadiuses2.push(x);
  }
}

function draw() {
  background(0);
  strokeWeight(5);
  stroke(255);
  noFill();
  beginShape();
  vertex(0, height/3)
  quadraticVertex(width/2, 650, width, height/3);
  endShape();

  fill(0);
  noStroke();
  ellipse(200, 375, 113, 50);

  strokeWeight(3);
  push();
  rotate(radians(45));
  stroke(150);
  rect(100, -50, 100, 100);
  pop();

  noStroke();
  fill(200, 200);
  triangle(4, 38, 9, 36, 35, 65);
  triangle(28, 32, 24, 37, 52, 59);
  triangle(53, 18, 57, 14, 81, 39);
  triangle(33, 21, 37, 17, 61, 46);
  triangle(69, 13, 73, 8, 90, 31);
  triangle(124, 27, 126, 24, 141, 46);
  triangle(150, 60, 154, 56, 169, 77);
  triangle(31, 124, 35, 119, 49, 140);


  strokeWeight(3);
  stroke(250);

  beginShape();
  fill(255);
  vertex(146, 375);
  vertex(155, 346);
  vertex(165, 361);
  vertex(172, 332);
  vertex(185, 356);
  vertex(195, 331);
  vertex(207, 354);
  vertex(220, 340);
  vertex(223, 358);
  vertex(237, 347);
  vertex(241, 367);
  vertex(252, 351);
  vertex(255, 375);
  endShape();


  print("Mouse X: " + mouseX);
  print("Mouse Y: " + mouseY);

  push();
  translate(110, 100);
  fill(100);
  noStroke();
  ellipse(-5, 5, 75);
  fill(255);
  ellipse(-5, 5, 50);
  rotate(radians(45));
  fill(214, 122, 158);
  beginShape();
  let x = 0;
  let y = 0;
  let size = 20;
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
  pop();

  spikyGuy(32, 310, randomRadiuses);
  spikyGuy(353, 341, randomRadiuses2);
}

  function spikyGuy(xLoc, yLoc, array){
    push()
    translate(xLoc, yLoc);
    let initialRadius = 20;
    let radius = initialRadius;
    noStroke();
    fill(100);
    beginShape();
    for(let i = 0; i < (360/pointNumber); i++) {
      const x = cos(radians(i * pointNumber)) * radius;
      const y = sin(radians(i * pointNumber)) * radius;
      vertex(x, y);
  
    //Change the radius for the next vertex
      if(radius == initialRadius) {
        radius = array[i];
       }else{
        radius = initialRadius
       }
      }
    endShape(); 
    pop(); 
  }
  // More spiky guys? In the background?
  // Something in the top right corner that's steep
  // more speed lines 

