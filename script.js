const typewriterContainer = document.querySelector('.typewriter-container');

// Trigger fade-out after typing animation ends
setTimeout(() => {
    // Fade out the typewriter container
    typewriterContainer.style.opacity = '0';
    typewriterContainer.style.pointerEvents = 'none'; // Prevent interaction

    // Show the main page
    setTimeout(() => {
        window.location.href = 'main.html'; // Redirect to the main page
    }, 1000); // Match the fade-out transition duration
}, 4000); // Match the typing animation duration
  const slideshow = document.getElementById("slideshow");
  const images = slideshow.getElementsByTagName("img");
  let currentImageIndex = 0;

  function showNextImage() {
      // Hide the current image
      images[currentImageIndex].classList.remove("active");

      // Increment the index or loop back to the beginning
      currentImageIndex = (currentImageIndex + 1) % images.length;

      // Show the next image
      images[currentImageIndex].classList.add("active");
  }

  // Set an interval to change the image every 3 seconds (3000 milliseconds)
  setInterval(showNextImage, 2000);
  var typed = new Typed('#iuu', {
    strings: ['Harsh Shukla','Web Developer', 'Programmer', 'Designer 3D', 'Freelancer','UX/UI Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
  const textToType = "I am a passionate and dedicated individual with expertise in frontend development, data structures and algorithms, Java, Python, and 3D animation. My interests lie at the intersection of technology and creativity, allowing me to build intuitive and visually engaging web applications while solving complex problems with efficient coding solutions. With hands-on experience in both technical and creative domains, I enjoy exploring new challenges and continuously learning to expand my skill set. Whether it's developing dynamic user interfaces, designing innovative 3D animations, or writing optimized algorithms, I bring a blend of technical proficiency and creative flair to every project.";
    let index = 0;

    function typeEffect() {
        if (index < textToType.length) {
            document.getElementById('typed-text').innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust speed with the timeout (100ms is fast, increase for slower effect)
        }
    }

    window.onload = typeEffect; // Call the typing effect once the page loads
    document.getElementById('typed-text').addEventListener('animationend', typeEffect);
    var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.btn');
let currentSlide = 1;

// Image Slider with Manual Navigation
var manualNavigation = function(manual){
slides.forEach((slide) => {
    slide.classList.remove('active');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });
});
    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    manualNavigation(i);
    currentSlide = i;
    });
});

//Autoplay Image Slider with Navigation 
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
    });

    slides[i].classList.add('active');
    buttons[i].classList.add('active');
    i++;

    if(slides.length == i){
        i = 0;
    }
    if(i >= slides.length){
        return;
    }
    repeater();
        }, 5000);
    }
    repeater();
}
repeat();
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = document.getElementById("theme-icon");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

