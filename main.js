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
// Making the transitions between sections slide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Populates the recent videos in videos section
const channelInfo = new ChannelInfo(document.getElementById('video-box'));
let videoCarousel = new VideoCarousel();

const videosButton = document.getElementById('videos-button');
videosButton.addEventListener('click', function() {
    if (!channelInfo.json) {
      console.log("no response from YouTube");
    } else {
      videoCarousel.populateVideos();
    }
});
// let hasPopulated = false;
// if (isMobile) {
//   document.addEventListener('scroll',() =>{
//     if (window.scrollY > document.getElementById('videos').scrollHeight && !videoCarousel.alreadyPopulated) {
//       videoCarousel.populateVideos();
//     }
//   });
// }
