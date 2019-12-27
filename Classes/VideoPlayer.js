class VideoPlayer{
    constructor(parent, id){
        this.parent = parent;
        this.id = id;
    }

    createHtml() {
        return (`<iframe width="560" height="315" src="https://www.youtube.com/embed/${this.id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    }

    addPlayer(id) { 
        const el = document.createElement("div");
        el.id = id;
        el.classList.add('youtube-video');
        el.innerHTML = this.createHtml();
        this.parent.appendChild(el);
    }
    
}