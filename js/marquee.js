// Enhanced hover control for touch devices
  document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.marquee-track');
    let isPaused = false;
    
    // Pause on touch start for mobile devices
    track.addEventListener('touchstart', function() {
      track.style.animationPlayState = 'paused';
      isPaused = true;
    });
    
    // Resume after delay
    track.addEventListener('touchend', function() {
      setTimeout(() => {
        if(isPaused) {
          track.style.animationPlayState = 'running';
          isPaused = false;
        }
      }, 1000);
    });
  });