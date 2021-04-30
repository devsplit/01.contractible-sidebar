'use-strict';

// This function runs as soon as the document loads
(() => {
  // Get sidebar and mobile menu toggle elements
  const sidebar = document.querySelector('.sidebar-w');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const toggledSidebarClass = 'sidebar-w-show';

  // Add sidebar toggle event to mobile menu toggle
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle(toggledSidebarClass);
  });

  //----------------------------------------------------------------------------

  // Initialize window event listner that closes sidebar when user clicks away
  const clickAwayListner = (event) => {
    console.log('click');

    if (
      sidebar.classList.contains(toggledSidebarClass) &&
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      sidebar.classList.remove(toggledSidebarClass);
    }
  };

  // Add click away event listner on load if window size is under 768px
  window.innerWidth <= 768 && window.addEventListener('click', clickAwayListner);

  // Add & remove click away event listner on window resize
  let listnerIsAdded = window.innerWidth <= 768;

  window.addEventListener('resize', (event) => {
    if (event.target.innerWidth <= 768) {
      if (!listnerIsAdded) {
        window.addEventListener('click', clickAwayListner);
        listnerIsAdded = true;
      }
    } else {
      if (listnerIsAdded) {
        window.removeEventListener('click', clickAwayListner);
        listnerIsAdded = false;
      }
    }
  });
})();
