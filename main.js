//check if this is being shown on mobile
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});
//Making the transitions between sections slide
let testEl;
document.querySelectorAll('.section-link').forEach(anchor => {
    console.log(anchor);

    anchor.addEventListener('click', function (e) {
        console.log(e);
        console.log('clicked');
        try {
          e.preventDefault();
          const targetEl = document.querySelector(this.getAttribute('href'));
          console.log(targetEl);
          targetEl.scrollIntoView({
            behavior: 'smooth'
        });
      } catch(e){
        console.log(e);

      }
    });
});

let videoCarousel = new VideoCarousel();

const videosButton = document.getElementById('videos-button');
videosButton.addEventListener('click', function() {
    if (!videoCarousel.channelInfo.json) {
      console.log("no response from YouTube");
    } else {
      if (!isMobile) videoCarousel.populateVideos();
    }
});
const contactForm = new ContactForm(document.getElementById('contact-form'));
