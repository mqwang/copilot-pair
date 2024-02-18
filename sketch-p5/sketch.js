/* draw a brown wooden boat with a white sail on top of a bloue ocean as follows:
- the sky is light blue with one white cloud
- several clouds on the sky, each cloud has three different sized circles that overlap each other
- the sun is a yellow circle inside a yellow-orange circle inside an orange circle in the top right corner
- the cloud should have some distance from the sun, near far horizon of the water
- the sail is a large white triangle connected to the top of the dark brown mast down to the tip of the front of the boat
- the boat is curved at the bottom and has a dark brown rectangle for the body with a top like a new moon shape
- the code should be written in modolues with comments to explain what each part does
*/

// Path: cloud.js
// draw a cloud with three overlapping circles
function drawCloud(x, y, r1, r2, r3) {
  // draw three overlapping circles
  fill(255);
  noStroke();
  ellipse(x, y, r1, r1);
  ellipse(x + r1/2, y, r2, r2);
  ellipse(x - r1/2, y, r3, r3);
} 


// Path: boat.js
// draw a boat with a sail and mask with correct shapes
// the boat should float on the ocean
// the boat should be on top of the water
function drawBoat(x, y, w, h) {
  // draw the boat
  fill(139, 69, 19);
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x + w, y);
  vertex(x + w, y + h);
  quadraticVertex(x + w/2, y + h + 20, x, y + h);
  endShape(CLOSE);
  // draw the sail
  fill(255);
  beginShape();
  vertex(x + w/2, y);
  vertex(x + w/2, y - h);
  vertex(x + w, y);
  endShape(CLOSE);
}



// Path: sun.js
// draw a sun with three overlapping circles with different colors
function drawSun(x, y, r1, r2, r3) {
  // draw three overlapping circles
  fill(255, 165, 0);
  noStroke();
  ellipse(x, y, r1, r1);
  fill(255, 215, 0);
  ellipse(x, y, r2, r2);
  fill(255, 255, 0);
  ellipse(x, y, r3, r3);
}



// Path: ocean.js
// draw an ocean wit waves
// the bottom of the boat should be on top of the deep blue water
// water waves should be visible on the very top of the water near the boarder with the sky
// the water waves should look natural not a uniform pattern
function drawOceanWithWaves(x, y, w, h) {
  // draw the ocean
  fill(0, 0, 139);
  noStroke();
  rect(x, y, w, h);
  // draw water waves
  fill(135, 206, 250);
  for (let i = 0; i < w; i += 20) {
    ellipse(i, y, 20, 20);
  }
}

// Path: sketch.js
// the bottom of the boat should be on top of the deep blue water, the boat body should be above the water, and water waves should be visible
// The sky takes aboout 2/3 of the canvas, the ocean takes about 1/3 of the canvas, and the boat takes about 1/12 of the canvas
// The water waves should be visible, the boat should be floating on the water, and the sail should be above the boat
// the clouds shouldn't touch the sun and shouln't be too close to the boat and sail, the clouds should be spread out on the sky
// the sun should be in the top right corner of the canvas
// add water waves on the ocean
function setup() {
  createCanvas(400, 400);
  // draw the sky
  background(135, 206, 250);
  // draw the sun
  drawSun(350, 50, 50, 40, 30);
  // draw the clouds
  drawCloud(100, 100, 50, 40, 30);
  drawCloud(200, 150, 50, 40, 30);
  drawCloud(300, 100, 50, 40, 30);
  // draw the ocean
  drawOceanWithWaves(0, 300, 400, 100);

  // draw the boat
  // bottom of the boat is on top of the water and merges with the water waves
  // the boat body is above the water
  // the sail is above the boat
  drawBoat(150, 250, 100, 50);
}