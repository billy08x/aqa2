document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    window.showSlide = function(index) {
        slides[currentSlide].classList.remove('active');
        
        if (index >= slides.length) {
            currentSlide = 0; 
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides[currentSlide].classList.add('active');
    };

    const presentationContainer = document.getElementById('presentation-container');
    if (presentationContainer) {
        presentationContainer.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            showSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        }
    });
});
