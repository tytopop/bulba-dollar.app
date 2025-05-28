console.log('Starting app.js');

let score = 0;
const tapButton = document.getElementById('tap-button');
const scoreDisplay = document.getElementById('score');

console.log('Tap button:', tapButton);
console.log('Score display:', scoreDisplay);

if (!tapButton || !scoreDisplay) {
  console.error('DOM elements not found');
} else {
  tapButton.addEventListener('click', () => {
    console.log('Tap detected');
    score++;
    scoreDisplay.textContent = `Taps: ${score}`;
  });
}
