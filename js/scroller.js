// Smooth scroll for circular button to header
document.getElementById('scrollTopBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Add click animation
    this.classList.add('clicked');
    
    // Remove animation class after it completes
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 400);
    
    // Smooth scroll to header section
    const header = document.querySelector('#hero-sector');
    if (header) {
        header.scrollIntoView({
            behavior: 'smooth'
        });
    }
});