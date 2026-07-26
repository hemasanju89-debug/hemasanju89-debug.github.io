/* ==========================================
   CONFETTI.JS
========================================== */

const confettiContainer = document.getElementById("confetti");

const confettiColors = [
"#ff1744",
"#ff9800",
"#ffee58",
"#00e676",
"#00b0ff",
"#7c4dff",
"#ffffff"
];

function createConfetti(){

    const piece = document.createElement("div");

    piece.className="confetti-piece";

    piece.style.left=Math.random()*100+"vw";

    piece.style.background=
    confettiColors[
        Math.floor(Math.random()*confettiColors.length)
    ];

    piece.style.animationDuration=
    (3+Math.random()*3)+"s";

    piece.style.transform=
    `rotate(${Math.random()*360}deg)`;

    confettiContainer.appendChild(piece);

    setTimeout(()=>{

        piece.remove();

    },6000);

}

setInterval(createConfetti,120);

for(let i=0;i<40;i++){

    createConfetti();

}