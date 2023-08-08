// Get all the zoom buttons
var zoomButtons = document.querySelectorAll('.zoom-button');

// Loop through each button
zoomButtons.forEach(function(button) {
  // Add a click event listener to each button
  button.addEventListener('click', function() {
    // Get the image associated with the button
    var image = this.previousElementSibling;
    
    // Zoom the image by changing its width
    image.style.width = '200%';
  });
});
