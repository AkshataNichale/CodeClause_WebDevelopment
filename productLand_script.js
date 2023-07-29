// script.js

// Get form and form elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Perform validation (you can add your own validation logic)

  // Perform further actions (e.g., send data to server, display a success message)

  // Reset form
  form.reset();
});
