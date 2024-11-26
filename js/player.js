// audio player + overlay
let audioPlayer = undefined;

let songs = ["my-time", "core", "duet", "forest", "title"];

function playAudio() {
    const audioElement = new Audio("./assets/"+ songs[Math.floor(Math.random() * songs.length)] +".mp3");
    audioElement.loop = true;
    audioElement.play();
    audioElement.ontimeupdate = tu;    // console.log("ran audoi")
    audioPlayer = audioElement;
}

function overlayClick() {
    const el = document.getElementById("overlay");
    const el2 = document.getElementById("player-container");
    const el3 = document.getElementById("body");
    // if(!el) console.error("Error! no element"); // checks are for slow people
    el.style.opacity = "0";
    el2.style.opacity = "1";
    el.style.pointerEvents = "none";
    // el3.style.backdropFilter = "blur(6px)";
    playAudio();
}

function tu(ev) {
    if(audioPlayer) {
        if(audioPlayer.ended) console.info("Audio stopped.");
        console.info("Time: " + audioPlayer.currentTime);
        console.log("Progress: " + audioPlayer.currentTime / audioPlayer.duration)
        const bar = document.getElementById("player-bar");
        bar.setAttribute("value", audioPlayer.currentTime / audioPlayer.duration);
        const txt = document.getElementById("player-text");
        const time = audioPlayer.currentTime;
        const minutes = Math.floor(time / 60);
        let seconds = Math.floor(time - minutes * 60);
        if(seconds < 10) seconds = "0" + seconds;
        txt.innerHTML = "" + minutes + ":" + seconds;
    } else {
        console.warn("Time update event called before audio player was set!")
    }
}