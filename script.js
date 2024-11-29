'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// confirmation message elements
const confirmationMessage = document.createElement('div');
confirmationMessage.classList.add('confirmation-message');
confirmationMessage.innerText = 'Your form has been submitted successfully!';
document.body.appendChild(confirmationMessage); // Append confirmation to body (or any container you prefer)
confirmationMessage.style.display = 'none'; // Initially hidden

// add event to all form input fields for enabling/disabling submit button
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// form submission event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  if (form.checkValidity()) {
    // Display confirmation message
    confirmationMessage.style.display = 'block';

    // Optionally, hide the confirmation message after a few seconds
    setTimeout(function () {
      confirmationMessage.style.display = 'none';
    }, 5000);

    // Optionally reset the form after submission
    form.reset();
    formBtn.setAttribute("disabled", ""); // Disable submit button again after submission
  }
});

// page navigation variables (for completeness)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
