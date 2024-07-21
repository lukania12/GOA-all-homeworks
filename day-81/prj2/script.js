let colorButton = document.getElementById('color-button');
let hexCode = document.getElementById('hex-code');

colorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor;
    let randomColor = getRandomColor();
  hexCode.textContent = randomColor;
  colorButton.classList.add('wiggle'); 
  setTimeout(() => {
    colorButton.classList.remove('wiggle'); 
  }, 500);
});

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
}