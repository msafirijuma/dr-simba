let video = document.querySelector("#backgroundVideo");
let videoIcon = document.querySelector("#videoIcon");

videoIcon.addEventListener("click", () => {
    if (!(video.paused)) {
        video.pause();
        videoIcon.classList.replace("fa-pause", "fa-play");
    } else {
        video.play();
        videoIcon.classList.replace("fa-play", "fa-pause");
    }
})