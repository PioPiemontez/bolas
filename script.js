const container = document.querySelector('.container');

for (let i = 0; i < 50; i++) {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.left = `${Math.random() * 80}vw`;
  ball.style.top = `${Math.random() * 80}vh`;
  ball.style.animationDuration = `${Math.random() * 5 + 1}s`;

  // Gere cores aleatórias em formato hexadecimal
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  ball.style.backgroundColor = randomColor;

  container.appendChild(ball);
}
