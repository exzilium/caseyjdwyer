document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links that point to an ID on the current page
    document.querySelectorAll('nav a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const targetId = href.substring(href.indexOf('#'));
            
            // Check if the target element exists on the CURRENT page
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                // Adjust scroll position to account for sticky header
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Add simple form submission handling feedback
    // Note: Formspree handles the actual submission redirect, 
    // but we can add some local validation polish if needed in the future.
});
