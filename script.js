// Function to smooth scroll to a target element when clicking a link
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top;
      window.scrollBy({ top: offsetTop, left: 0, behavior: 'smooth' });
    }
  }
  
  // Function to handle navigation menu clicks for smooth scrolling
  function handleNavigationClick(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    smoothScrollTo(target);
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    const navigationLinks = document.querySelectorAll('.navigation-link');
    navigationLinks.forEach(link => {
      link.addEventListener('click', handleNavigationClick);
    });
  
    // Function to toggle back-to-top button visibility based on scroll position
    function toggleBackToTopButton() {
      var backToTopBtn = document.getElementById("back-to-top-btn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }
  
    // Function to scroll to the top of the page smoothly
    function scrollToTop() {
      var scrollDuration = 500; // Duration of the scroll animation in milliseconds
      var scrollStep = -window.scrollY / (scrollDuration / 15); // Calculation for smooth scrolling
  
      var scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  
    // Event listener for scrolling
    window.onscroll = function () {
      toggleBackToTopButton();
    };
  
    // Back to top button event listener
    const backToTopBtn = document.getElementById('back-to-top-btn');
    backToTopBtn.addEventListener('click', function () {
      scrollToTop();
    });
  });
  
  // Function to toggle back-to-top button visibility based on scroll position
  function toggleBackToTopButton() {
    var backToTopBtn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
  