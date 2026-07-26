/* ==========================================
   EFFECTS.JS
========================================== */

// ===== Sparkles =====

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.animationDuration =
        (1 + Math.random() * 2) + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}

setInterval(createSparkle, 300);


// ===== Shooting Star =====

function shootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 40 + "vh";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2500);

}

setInterval(shootingStar, 5000);


// ===== Gift Effect =====

const giftBox = document.getElementById("gift");

giftBox.addEventListener("click", () => {

    for (let i = 0; i < 30; i++) {

        const emoji = document.createElement("div");

        emoji.className = "gift-emoji";

        emoji.innerHTML = "🎉";

        emoji.style.left = giftBox.offsetLeft + "px";
        emoji.style.top = giftBox.offsetTop + "px";

        document.body.appendChild(emoji);

        setTimeout(() => {

            emoji.style.transform =
                `translate(${Math.random()*300-150}px,-${Math.random()*300}px)`;

            emoji.style.opacity = "0";

        }, 20);

        setTimeout(() => {

            emoji.remove();

        }, 1800);

    }

});