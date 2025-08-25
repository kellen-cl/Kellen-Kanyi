// Initialize Typed.js
var typed = new Typed('#typed', {
  strings: ["Developer", "Freelancer", "Writer"], // Words to type
  typeSpeed: 80,     // Typing speed in ms
  backSpeed: 50,     // Backspace speed in ms
  backDelay: 1000,   // Pause before backspacing
  loop: true         // Repeat forever
});

  //Script for handling success/error 
  document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent normal form submission
  const form = event.target;
  const data = new FormData(form);
  const action = form.action;

  try {
    let response = await fetch(action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById("form-success").classList.remove("d-none");
      document.getElementById("form-error").classList.add("d-none");
      form.reset(); // Clear the form
    } else {
      document.getElementById("form-error").classList.remove("d-none");
    }
  } catch (error) {
    document.getElementById("form-error").classList.remove("d-none");
  }
});