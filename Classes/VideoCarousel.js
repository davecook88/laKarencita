const PARENT_EL_ID = 'videos';

class VideoCarousel {
    constructor() {
        this.videoBox = this.createVideoBox();
        this.channelInfo = new ChannelInfo(this.videoBox)//(document.getElementById('video-box'));
        console.log('videoCarousel constructing');
        this.containerDiv = document.getElementById('videos');
        this.videos = [];
        this.currentFrontId = 0;
        this.alreadyPopulated = false;
        this.buttonHolder = this.createButtonHolder();
        this.upButton = this.createButton('up');
        this.downButton = this.createButton('down');
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
    createButtonHolder() {
      const holderDiv = document.createElement('div');
      holderDiv.classList = "up-down-buttons";
      this.containerDiv.insertBefore(holderDiv, this.containerDiv.children[1]);
      return holderDiv;
    }
    createButton(upOrDown) {
      const innerHTML = `<i class="fas fa-arrow-${upOrDown}" id="${upOrDown}-button"></i>`
      const button = document.createElement('div');
      if (upOrDown == 'up') {
        button.addEventListener('click',() => this.addOneToCurrentFrontId());
      } else {
        button.addEventListener('click',() => this.minusOneFromCurrentFrontId());
      }
      button.innerHTML = innerHTML;
      this.buttonHolder.appendChild(button);
      return button;
    }
    createVideoBox(){
      const parentEl = document.getElementById(PARENT_EL_ID);
      const el = document.createElement('div');
      el.classList.add('video-container');
      el.id = 'video-box';
      parentEl.appendChild(el);
      return el;
    }
    populateVideos(bool){
        console.log('populating');
        this.videos = document.getElementsByClassName('youtube-video');
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
