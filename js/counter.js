document.addEventListener('DOMContentLoaded', function() {
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }

        // Function to animate counting
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100; // Adjust speed here (higher = faster)
            const duration = 2000; // Total animation duration in ms
            const stepTime = duration / (target / increment);
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                element.textContent = Math.floor(current).toLocaleString();
            }, stepTime);
        }

        // Function to handle scroll event
        function handleScroll() {
            const statsItems = document.querySelectorAll('.stat-item');
            let allAnimated = true;
            
            statsItems.forEach(item => {
                const numberElement = item.querySelector('.stat-number');
                const target = parseInt(numberElement.getAttribute('data-target'));
                
                if (isInViewport(item)) {
                    if (!numberElement.classList.contains('animated')) {
                        numberElement.classList.add('animated');
                        animateCounter(numberElement, target);
                    }
                } else {
                    allAnimated = false;
                }
            });
            
            if (allAnimated) {
                window.removeEventListener('scroll', handleScroll);
            }
        }

        // Initialize all counters to 0
        document.querySelectorAll('.stat-number').forEach(element => {
            element.textContent = '0';
        });

        // Set up scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Trigger initial check
        handleScroll();
    });