let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// Define the size of the game grid
let boxSize = 20;
let boxes = 30; // Define the number of boxes along one side of the grid

// Set the canvas size to be a multiple of the box size
canvas.width = boxes * boxSize;
canvas.height = boxes * boxSize;

// Initialize the snake at the center of the grid
let snake = [{ x: Math.floor(boxes / 2), y: Math.floor(boxes / 2) }];

// Initialize the direction of the snake
let direction = "RIGHT";

// Initialize the food position
let food = null;

// Function to draw a box at (x, y)
function drawBox(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x*boxSize, y*boxSize, boxSize, boxSize);
}

// Initialize the obstacles
let obstacles = [
  { x: Math.floor(boxes / 4), y: Math.floor(boxes / 4) },
  { x: Math.floor(boxes * 3 / 4), y: Math.floor(boxes * 3 / 4) },
  { x: Math.floor(boxes / 2), y: Math.floor(boxes / 2) },
  { x: Math.floor(boxes / 4), y: Math.floor(boxes * 3 / 4) },
  { x: Math.floor(boxes * 3 / 4), y: Math.floor(boxes / 4) },
  { x: Math.floor(boxes / 3), y: Math.floor(boxes / 3) }, // Additional obstacle 1
  { x: Math.floor(boxes * 2 / 3), y: Math.floor(boxes * 2 / 3) }, // Additional obstacle 2
];

// Function to check if the snake collides with an obstacle
function checkCollision(head, obstacles) {
  for(let i = 0; i < obstacles.length; i++) {
    if(head.x === obstacles[i].x && head.y === obstacles[i].y) {
      return true;
    }
  }
  return false;
}

// Initialize the score
let score = 0;

// Modify the updateSnake function
function updateSnake() {
  let head = Object.assign({}, snake[0]); // copy head
  if (direction === "LEFT") head.x = (head.x - 1 + boxes) % boxes;
  if (direction === "UP") head.y = (head.y - 1 + boxes) % boxes;
  if (direction === "RIGHT") head.x = (head.x + 1) % boxes;
  if (direction === "DOWN") head.y = (head.y + 1) % boxes;

  // Check if the snake collides with an obstacle
  if(checkCollision(head, obstacles)) {
    // End the game
    clearInterval(gameInterval);
    alert("Game Over. Your score is " + score);
    return;
  }

  snake.unshift(head); // add new head to snake

  if (food === null || (snake[0].x !== food.x || snake[0].y !== food.y)) {
    snake.pop(); // remove tail
  } else {
    // The snake has eaten the food, increase the score
    score++;
    food = null;
  }
}

// Function to update the score on the page
function updateScoreOnPage() {
  document.getElementById("score").innerText = "Score: " + score;
}

// Function to update the position of the food
function updateFood() {
  if (food === null || (snake[0].x === food.x && snake[0].y === food.y)) {
    food = { x: Math.floor(Math.random() * boxes), y: Math.floor(Math.random() * boxes) };
  }
}

// Modify the gameLoop function
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateFood();
  updateSnake();
  snake.forEach((box, index) => drawBox(box.x, box.y, index === 0 ? "green" : "lightgreen"));
  obstacles.forEach((box) => drawBox(box.x, box.y, "black")); // Draw obstacles
  drawBox(food.x, food.y, "red");

  updateScoreOnPage();

    // // Draw the score
    // ctx.fillStyle = "black";
    // ctx.font = "20px Arial";
    // ctx.fillText("Score: " + score, 10, 30);
}

// Event listener for the arrow keys
window.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
});

// Start the game loop
let gameInterval = setInterval(gameLoop, 200);