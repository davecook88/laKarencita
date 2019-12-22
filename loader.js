function loadScript (file) {
    var scr = document.createElement("script");
    scr.src = "Classes/" + file;
    document.body.appendChild(scr);
}

loadScript("ChannelInfo.js");
loadScript("VideoPlayer.js");