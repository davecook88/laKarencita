class VideoCarousel {
    constructor() {
        console.log('videoCarousel constructing');
        this.videos = [];
        this.currentFrontId = 0;
        this.alreadyPopulated = false;

    }
    addOnHover(){
        for(let i = 0; i < this.videos.length; i++){
            const v = this.videos[i];
            v.addEventListener('mouseover', (e) => {
                this.onHover(e.target.id);
            });
        }
    }
    addKeyPress(){
      for(let i = 0; i < this.videos.length; i++){
          const v = this.videos[i];
          v.addEventListener('keypress', (e) => {
              console.log(e);
          });
      }
    }
    applyClasses(){
        const currentFrontElId = this.currentFrontId;// parseInt(id);
        let above, below;
        const front = this.videos[currentFrontElId];
        const belowId = currentFrontElId + 1;
        if (currentFrontElId < this.videos.length){
            below = this.videos[belowId];
        }
        const aboveId = currentFrontElId - 1;
        if (currentFrontElId > 0) {
            above = this.videos[currentFrontElId - 1];
        }

        front.classList = ('youtube-video front-video');
        if (below) below.classList = ('youtube-video hidden-video-below');
        if (above) above.classList = ('youtube-video hidden-video-above');
        for (let i = 0; i < this.videos.length; i++) {
          if (i > belowId  || i < aboveId) {
            this.videos[i].classList = 'youtube-video hide';
          }
        }
    }
    onHover(id) {
        if (!id) return;
        console.log(id);
        this.applyClasses(id);
    }
    populateVideos(bool){
        console.log('populating');
        this.videos = document.getElementsByClassName('youtube-video');
        // for (let i = 0; i < this.videos.length; i++) {
        //     console.log(this.videos[i].classList);
        // }
        const upButton = document.getElementById('up-button');
        const downButton = document.getElementById('down-button');
        upButton.addEventListener('click', () => this.addOneToCurrentFrontId());
        this.applyClasses(0);
        this.alreadyPopulated = true;
    }
    addOneToCurrentFrontId(){
      if (this.currentFrontId > this.videos.length - 1) {
        console.log("too high");
        this.currentFrontId = this.videos.length - 1;
        return;
      }
      console.log('up');
      this.currentFrontId = this.currentFrontId + 1;
      console.log(this.currentFrontId);
      this.applyClasses();

    }
    minusOneFromCurrentFrontId(){
      if (this.currentFrontId < 0){
        this.currentFrontId = 0;
        return;
      };
      console.log('down');
      this.currentFrontId = this.currentFrontId - 1;
      console.log(this.currentFrontId);
      this.applyClasses();
    }
}
