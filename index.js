// Get reference to the "No, Change Place" button
const noButton = document.getElementById('noButton');

// Add event listener for the "No, Change Place" button
noButton.addEventListener('mouseenter', function () {
  const newLeft = Math.random() * (window.innerWidth - noButton.clientWidth);
  const newTop = Math.random() * (window.innerHeight - noButton.clientHeight);

  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
});
