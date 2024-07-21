function generateRandomNumber() {
    let randomNumber = Math.random() * 10;
    document.getElementById('stat').textContent = RUNDOMNUMBER.toFixed(3);
}

 function generateRandomNumber() {
     const randomNumber = Math.random() * 10;
     const resultElement = document.getElementById('stat');
     resultElement.textContent = randomNumber.toFixed(2);
     resultElement.style.animation = 'none';
     setTimeout(() => resultElement.style.animation = '', 10); 
 }