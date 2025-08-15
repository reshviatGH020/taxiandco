document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.nav-links');
    const body = document.body;
    const navItems = document.querySelectorAll('.nav-links li');
    
    // Set custom property for staggered animation
    navItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    menuToggle.addEventListener('click', function() {
        const isOpening = !this.classList.contains('active');
        
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('menu-open');
        this.setAttribute('aria-expanded', isOpening);
        
        // Reset animations when closing
        if (!isOpening) {
            navItems.forEach(item => {
                item.style.animation = 'none';
                void item.offsetWidth;
            });
        }
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && 
            !menuToggle.contains(event.target) && 
            mainNav.classList.contains('active')) {
            menuToggle.click();
        }
    });
});