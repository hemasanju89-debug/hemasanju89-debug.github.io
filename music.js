/* ==========================================
   MUSIC.JS
========================================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

// Volume
music.volume = 0.5;

// Toggle Music
musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        musicPlaying = false;

    } else {

        music.play().catch(() => {
            alert("Tap anywhere on the page first to enable music.");
        });

        musicBtn.innerHTML = "⏸ Pause Music";

        musicPlaying = true;

    }

});

// Autoplay after first user interaction
document.addEventListener("click", function startMusic() {

    if (!musicPlaying) {

        music.play().catch(() => {});

        musicPlaying = true;

        musicBtn.innerHTML = "⏸ Pause Music";

    }

    document.removeEventListener("click", startMusic);

});