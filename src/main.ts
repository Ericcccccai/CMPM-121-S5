// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const _increment = "increment",
  _buttons = "counter",
  _heading = "CMPM 121 Project";

function updateDisplay() {
  const ctr = document.getElementById("counter")!;
  ctr.innerHTML = `${c}`;
  document.title = "Clicked " + c;
  document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
}

function createUI() {
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;
}

function getElements() {
  return {
    increment: document.getElementById("increment")!,
    decrement: document.getElementById("dec")!,
    reset: document.getElementById("reset")!,
    counter: document.getElementById("counter")!,
  };
}

function bindEvents(inc: HTMLElement, dec: HTMLElement, rst: HTMLElement) {
  inc.addEventListener("click", () => {
    c++;
    updateDisplay();
  });
  dec.addEventListener("click", () => {
    c--;
    updateDisplay();
  });
  rst.addEventListener("click", () => {
    c = 0;
    updateDisplay();
  });
}

function setup() {
  createUI();
  const { increment, decrement, reset } = getElements();
  bindEvents(increment, decrement, reset);
  updateDisplay(); // show initial state
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
