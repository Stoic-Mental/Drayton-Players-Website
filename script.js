
const slides = document.querySelectorAll('.slider-images img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;

function showSlide(index) {
    // Remove the 'active' class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Wrap around if we go past the end or before the beginning
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