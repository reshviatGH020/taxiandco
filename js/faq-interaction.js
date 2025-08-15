document.addEventListener('DOMContentLoaded', function() {
  const questionBlocks = document.querySelectorAll('.ag3-question-block');
  
  questionBlocks.forEach(block => {
    const btn = block.querySelector('.ag3-question-btn');
    
    btn.addEventListener('click', () => {
      // Close all other open questions
      questionBlocks.forEach(item => {
        if (item !== block && item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current question
      block.classList.toggle('active');
    });
  });
});