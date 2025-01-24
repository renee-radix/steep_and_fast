let pointNumber = 5;

// create one of these per spiky guy
let randomRadiuses = [];
let randomRadiuses2 = [];
let randomRadiuses3 = [];
let randomRadiuses4 = [];
let randomRadiuses5 = [];
let randomRadiuses6 = [];

function setup() {
  createCanvas(400, 400);
  // creating arrays of random points for drawing the spiky guys
  for (let i = 0; i < (360/pointNumber) * 8; i++){
    // mess with these numbers to create different effects
    x = random(20) + 20;
    if (randomRadiuses.length < 360/pointNumber){
      randomRadiuses.push(x);
    }else{
      if (randomRadiuses2.length < 360/pointNumber){
        randomRadiuses2.push(x);
      }else{
        if (randomRadiuses3.length < 360/pointNumber){
          randomRadiuses3.push(x);
        }else{
          if (randomRadiuses4.length < 360/pointNumber){
            randomRadiuses4.push(x);
          }else{
            if (randomRadiuses5.length < 360/pointNumber){
              randomRadiuses5.push(x);
            }else{
              if (randomRadiuses6.length < 360/pointNumber){
                randomRadiuses6.push(x);
              }
            }
          }
        }
      }
    }
  }
}

function draw() {
  background(0);

  // Spiky guys floating in the background
  spikyGuy(32, 310, randomRadiuses, 100);
  spikyGuy(353, 341, randomRadiuses2, 80);
  spikyGuy(366, 50, randomRadiuses3, 70);
  spikyGuy(98, 254, randomRadiuses2, 80);
  spikyGuy(273, 266, randomRadiuses5, 80);



  // U bend
  strokeWeight(5);
  stroke(255);
  noFill();
  beginShape();
  vertex(0, height/3)
  quadraticVertex(width/2, 650, width, height/3);
  endShape();

  // obscuring black circle at base of u bend
  fill(0);
  noStroke();
  ellipse(200, 375, 113, 50);

  // outline of companion cube
  strokeWeight(3);
  push();
  rotate(radians(45));
  stroke(150);
  rect(100, -50, 100, 100);
  pop();

  //speed lines for companion cube
  noStroke();
  fill(200, 200);
  //behind
  triangle(4, 38, 9, 36, 35, 65);
  triangle(28, 32, 24, 34, 52, 59);
  triangle(53, 18, 57, 16, 81, 39);
  triangle(33, 21, 35, 17, 61, 46);
  triangle(69, 13, 71, 10, 90, 31);
  //topside
  triangle(124, 27, 126, 24, 141, 46);
  triangle(150, 60, 154, 58, 169, 77);
  //underside
  triangle(31, 124, 35, 121, 49, 140);
  triangle(58, 150, 55, 151, 74, 170);

  //spikes
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


  
  //companion cube
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


  // coloured falling balls
  fill(250, 100, 0);
  noStroke();
  ellipse(290, 82, 30, 30);
  fill(200, 0, 0);
  ellipse(370, 134, 30, 30);
  fill(200, 0, 200);
  ellipse(289, 153, 30, 30);
  fill(0, 0, 200);
  ellipse(343, 190, 30, 30);

  // speedlines for balls
  stroke(255);
  strokeWeight(.5);
  line(298, 54, 320, 26);
  line(320, 108, 344, 79);
  line(247, 78, 274, 45);
  line(245, 139, 270, 110);
  line(325, 172, 305, 198);
  line(357, 110, 381, 80);

  // for debugging
  print("Mouse X: " + mouseX);
  print("Mouse Y: " + mouseY);

}

  // function to draw the cool virus looking things
  function spikyGuy(xLoc, yLoc, array, fillCol){
    push()
    translate(xLoc, yLoc);
    let initialRadius = 20;
    let radius = initialRadius;
    noStroke();
    fill(fillCol);
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

  // I might want to do something a little more interesting to the spikes, but otherwise I'm done

