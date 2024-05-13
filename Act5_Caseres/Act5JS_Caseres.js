// Smooth scrolling for anchor links in the navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar

        window.scrollTo({
            top: section.offsetTop - navbarHeight, // Adjust the scroll position by subtracting the navbar height
            behavior: 'smooth'
        });
    });
});
