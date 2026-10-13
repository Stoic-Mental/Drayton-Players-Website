function initializeSlider(sliderElement) {
    const slides = sliderElement.querySelectorAll('.slider-images img');
    const nextBtn = sliderElement.querySelector('.next-btn');
    const prevBtn = sliderElement.querySelector('.prev-btn');

    let currentIndex = 0;

    function showSlide(index) {
        // Remove the 'active' class from all slides in *this* slider
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Wrap around logic
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        
        // Add the 'active' class to the current slide
        slides[currentIndex].classList.add('active');
    }

    // Next button click
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Previous button click
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
}

// Find ALL sliders on the page and initialize each one automatically!
document.querySelectorAll('.image-slider').forEach(slider => {
    initializeSlider(slider);
});

