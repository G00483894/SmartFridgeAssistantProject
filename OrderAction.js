// Get form and message elements from the page
const form = document.getElementById("orderForm");
const message = document.getElementById("orderMessage");

// Add event listener for form submission
form.addEventListener("submit", function (event) {

  // Prevent default form behavior (page reload)
  event.preventDefault();

  // Show confirmation message by adding "show" class
  message.classList.add("show");

  // Scroll smoothly to the message so user can see it
  message.scrollIntoView({ behavior: "smooth" });
});


/*
This solution was inspired by examples from W3Schools (www.w3schools.com).

I decided to use this approach because:
- It improves user experience (UX) by showing instant feedback without reloading the page
- It makes the website feel more interactive and modern
- It helps guide the user after clicking "Place my order"
- Smooth scrolling makes the interaction feel more natural and user-friendly

This is a simple but effective way to simulate form confirmation in a front-end project.
*/