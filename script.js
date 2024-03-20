
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.opacity = 0.5;
    setTimeout(() => {
      button.style.opacity = 1;
    }, 100); // Adjust duration as needed
  });
});
