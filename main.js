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
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const flexContainer = document.querySelector(".flex-container");
        const originalXOffset = flexContainer.getBoundingClientRect().left;
        try {
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // console.log(originalXOffset, flexContainer.getBoundingClientRect().left);
        // if (originalXOffset > flexContainer.getBoundingClientRect().left  ) {
        //   window.scrollBy({x:-100, behavior:"smooth"});
        // }

      } catch(e){
        console.log(e);
      }
    });
});
// let testEvent;
// let targetEl;
// let xPos;
// document.querySelectorAll('.section-link').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//
//       try {
//         console.log(e);
//         testEvent = e;
//         targetEl = document.querySelector(e.target.hash);
//         xPos = targetEl.offsetLeft;
//
//         window.scrollTo({right:xPos, behavior:"smooth"});
//       } catch(e){
//         console.log(e);
//       }
//     });
// });
// Populates the recent videos in videos section
//const channelInfo = new ChannelInfo(document.getElementById('video-box'));
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
