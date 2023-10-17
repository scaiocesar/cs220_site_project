const images = document.querySelectorAll('.carousel-slide img');

let currentIndex = 0; 

// Initially, show the first image
images[currentIndex].classList.add('active');

const changeImage = () => {
    // Remove the active class from the current image
    images[currentIndex].classList.remove('active');
    
    // Move to the next image or loop back to the start
    currentIndex = (currentIndex + 1) % images.length;

    // Add the active class to the next image
    images[currentIndex].classList.add('active');
}

let slideshowInterval = setInterval(changeImage, 3000); // Change every 5 seconds, adjust for desired duration
