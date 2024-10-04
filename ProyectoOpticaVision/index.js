function changeBackgroundColor() {
  const colors = ['#ffffff', '76d7c4', '#aed6f1', '#dda0dd','#c8fbba','#ff0266','#03DAC5']; 
  const currentColor = document.body.style.backgroundColor;
  let newColor = colors[Math.floor(Math.random() * colors.length)];

  
  while (newColor === currentColor) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }

  document.body.style.backgroundColor = newColor;
}
