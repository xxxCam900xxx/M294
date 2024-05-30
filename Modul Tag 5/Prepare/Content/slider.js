const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Deselect all dots
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  // Show the current slide
  slides[index].style.display = 'block';

  // Select the current dot
  dots[index].classList.add('active');
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Function to go to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Event listener for dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Show the initial slide
showSlide(currentSlide);