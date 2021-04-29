'use-strict';

// WARNING: This code's purpose is just previewing functionality.

// This next block of code runs instantly when the document loads.
(() => {
  // Get all sidebar links.
  const links = document.querySelectorAll('.sidebar-link');

  // Loop through links in order to add a click event to each one of them.
  links.forEach((link) => {
    // Add click event
    link.addEventListener('click', (event) => {
      // Remove all selected-state classes from all links.
      links.forEach((link) => link.classList.remove('sidebar-link-selected'));

      // Add selected-state class to clicked target link.
      event.currentTarget.classList.add('sidebar-link-selected');
    });
  });
})();
