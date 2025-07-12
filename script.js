// JavaScript for Please Creatre For
console.log('Please Creatre For loaded successfully!');

// Add interactive features
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.bg-white');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});