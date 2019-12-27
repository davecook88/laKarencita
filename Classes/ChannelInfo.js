class ChannelInfo {
    constructor(parentEl){
        this.json = undefined;
        this.getChannelData(this);
        this.videoIds = [];
        this.parentEl = parentEl;
    }
    
    getChannelData(channelInfo) {
        const channelApiUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDcVNpPLoAtuhJDuqHZdODcz3Nuo3mE1g0&channelId=UCJ9lYSdFSSr_d8wrb2neIHA&part=snippet,id&order=date&maxResults=20";

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = (e) => {
            
            if (e.target.status == 200 && e.target.readyState === 4) {
                try {

                    this.json = JSON.parse(xhttp.responseText);
                    this.json.items.forEach(item => {
                        this.videoIds.push(item.id.videoId);
                    });
                    
                    for (let i = 0; i < 2; i++) {
                        const id = this.videoIds[i];
                        const video = new VideoPlayer(this.parentEl,id);
                        video.addPlayer(i);
                    }
                } catch(err) {
                    console.log(err);
                }                
            }
            
        };
        try {
            xhttp.open("GET", channelApiUrl, true);
            xhttp.send();
        } catch(err) {
            console.log(err);
        }
        
    }

    appendVideos(parentEl) {
        const ids = this.videoIds;
        for (let i = 0; i < ids.length; i++) {
            const video = new VideoPlayer(parentEl,id[i]);
            video.appendVideos();
        }
        
    }
}