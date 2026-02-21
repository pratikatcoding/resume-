document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Intersection Observer for Fade-in Animations ---
    const sections = document.querySelectorAll('.content-section, .hero-section');
    
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible to trigger
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Active Nav Link Highlighting on Scroll ---
    const allSections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 65) { // 65 is approx navbar height + buffer
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });


});
window.onscroll = function() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};
document.addEventListener("DOMContentLoaded", function() {
  const recForm = document.getElementById('recForm');
  const modal = document.getElementById('thankYouModal');
  const closeModal = document.getElementById('closeModal');
  const recText = document.getElementById('recText');

  recForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from reloading

    // Check if the textarea isn't just empty spaces
    if (recText.value.trim() !== "") {
      modal.style.display = "flex"; // Show the pop-up
      recText.value = "";           // Clear the text box for the next entry
    }
  });

  // Close the modal when clicking the 'Close' button
  closeModal.addEventListener('click', function() {
    modal.style.display = "none";
  });

  // Close the modal if the user clicks anywhere outside the white box
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
