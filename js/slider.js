// Slider Data
const sliderData = [
    {
        image: "images/slider/vitashop-1.JPG",
        title: "Vita Branch",
        description: "Get the best gaming laptops at Vita Branch",
        cta: "visit Vita Branch",
        ctaLink: "#branchs"
    },
    {
        image: "images/slider/vitashop-2.JPG",
        title: "New Arrivals",
        description: "Check out our latest gaming laptops",
        cta: "Explore",
        ctaLink: "#products"
    },
    {
        image: "images/slider/vitashop-3.JPG",
        title: "Student Special",
        description: "Special discounts for students",
        cta: "Learn More",
        ctaLink: "#products"
    }
];

// Initialize Slider
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
});

function initializeSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    // Create slides
    sliderData.forEach((slide, index) => {
        const slideElement = createSlide(slide, index);
        slider.appendChild(slideElement);
    });

    // Add navigation buttons
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => navigateSlider('prev'));
        nextButton.addEventListener('click', () => navigateSlider('next'));
    }

    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    // Start autoplay
    startAutoplay();
}

function createSlide(slideData, index) {
    const slide = document.createElement('div');
    slide.className = `slide ${index === 0 ? 'active' : ''}`;
    slide.innerHTML = `
        <img src="${slideData.image}" alt="${slideData.title}">
        <div class="slide-content">
            <h2>${slideData.title}</h2>
            <p>${slideData.description}</p>
            <a href="${slideData.ctaLink}" class="btn btn-primary">${slideData.cta}</a>
        </div>
    `;
    return slide;
}

let currentSlide = 0;
const slideInterval = 5000; // 5 seconds
let autoplayInterval;

function navigateSlider(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Update current slide index
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }

    // Add active class to new current slide
    slides[currentSlide].classList.add('active');

    // Reset autoplay
    resetAutoplay();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            navigateSlider('prev');
        } else {
            navigateSlider('next');
        }
    }
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        navigateSlider('next');
    }, slideInterval);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Pause autoplay when user hovers over slider
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        startAutoplay();
    });
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        navigateSlider('prev');
    } else if (e.key === 'ArrowRight') {
        navigateSlider('next');
    }
}); 