


// Typing Animation
const typingText = document.getElementById('typingText');
const textToType = "It's been a year since I got to know you, and we've shared so many moments together. Even though not everything has been perfect, my hope is that from now on, we can make things even better. Merry Christmas, my love Tama Puspita Sari!";
let index = 0;
function typeText() {
  typingText.textContent += textToType[index];
  index++;

  if (index < textToType.length) {
    setTimeout(typeText, 100);
  } else {
    // Start slideshow after typing animation completes
    setTimeout(() => {
      document.getElementById('slideshow').classList.remove('hidden');
      startSlideshow();

      // Scroll to the next section (slideshow) after typing animation
      const nextSection = document.getElementById('slideshow');
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }, 1000); // Adjust the delay as needed
  }
}


// Slideshow
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slideshow-item').length;

function showSlide(slideNumber) {
  // Logic to display the current slide
  const slides = document.querySelectorAll('.slideshow-item');
  slides.forEach((slide, index) => {
    slide.style.display = index === slideNumber ? 'block' : 'none';
  });

  // Update pager dots
  const pagerDots = document.querySelectorAll('.pager-dot');
  pagerDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideNumber);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function startSlideshow() {
  const slideshowInterval = setInterval(() => {
    nextSlide();
  }, 2000); // Change slide every 3 seconds

  // Automatically scroll to the next section after slideshow completes
  setTimeout(() => {
    clearInterval(slideshowInterval); // Stop the slideshow interval
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: 'smooth'
    });
    // Display claim reward section after scrolling
    document.getElementById('claimReward').classList.remove('hidden');
  }, totalSlides * 2000 + 1000); // Adjust the delay as needed
}
// Your existing JavaScript code goes here

// Your existing JavaScript code goes here

// Snowfall Animation
const snowfallContainer = document.getElementById('snowfall');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.animationDelay = `-${Math.random()}s`;
  snowfallContainer.appendChild(snowflake);

  snowflake.addEventListener('animationiteration', () => {
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.animationDelay = `-${Math.random()}s`;
  });
}

// Create snowflakes
for (let i = 0; i < 50; i++) {
  createSnowflake();
}



// Start typing animation
typeText();
