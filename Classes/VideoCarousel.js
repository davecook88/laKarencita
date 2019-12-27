class VideoCarousel {
    constructor() {
        console.log('videoCarousel constructing');
        this.videos = [];

    }
    addOnHover(){
        for(let i = 0; i < this.videos.length; i++){
            const v = this.videos[i];
            v.addEventListener('mouseover', (e) => {
                this.onHover(e.target.id);
            });
        }
    }
    applyClasses(id){
        currentFrontElId = parseInt(id);
        let above;
        const front = this.videos[currentFrontElId];
        const belowId = currentFrontElId + 1<
        const below = this.videos[currentFrontElId + 1];
        if (currentFrontElId > 1) {
            above = this.videos[currentFrontElId - 1];
        }

        front.classList.add('front-video');
        below.classList.add('hidden-video-below');
        if (above) above.classList.add('hidden-video-above');
    }
    onHover(id) {
        if (!id) return;
        console.log(id);
        this.applyClasses(id);
    }
    populateVideos(){
        console.log('populating');
        this.videos = document.getElementsByClassName('youtube-video');
        // for (let i = 0; i < this.videos.length; i++) {
        //     console.log(this.videos[i].classList);
        // }
        this.applyClasses(0);
        this.addOnHover();
    }
}
