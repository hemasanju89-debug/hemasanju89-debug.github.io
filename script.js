// Basic repaired script
const timer=document.getElementById("timer");
const username=document.getElementById("username");
const wishBtn=document.getElementById("wishBtn");
const shareBtn=document.getElementById("shareBtn");
const musicBtn=document.getElementById("musicBtn");
const themeBtn=document.getElementById("themeBtn");
const wishCard=document.getElementById("wishCard");
const wishTitle=document.getElementById("wishTitle");
const wishMessage=document.getElementById("wishMessage");
const fromName=document.getElementById("fromName");
const bgMusic=document.getElementById("bgMusic");

function updateCountdown(){
 if(!timer) return;
 const target=new Date("2027-01-01T00:00:00").getTime();
 const now=Date.now();
 const d=target-now;
 if(d<=0){timer.textContent="🎉 HAPPY NEW YEAR 2027";return;}
 const days=Math.floor(d/86400000);
 const hrs=Math.floor((d%86400000)/3600000);
 const mins=Math.floor((d%3600000)/60000);
 const secs=Math.floor((d%60000)/1000);
 timer.textContent=`${days}d : ${hrs}h : ${mins}m : ${secs}s`;
}
setInterval(updateCountdown,1000);updateCountdown();

const p=new URLSearchParams(location.search);
const sender=p.get("name");
if(sender&&fromName){fromName.innerHTML="❤️ Wishes From <b>"+sender+"</b>";}

if(wishBtn){
wishBtn.onclick=()=>{
 const n=username?.value.trim();
 if(!n){alert("Enter your name");return;}
 if(wishCard) wishCard.style.display="block";
 if(wishTitle) wishTitle.innerHTML="🎆 Happy New Year 2027";
 if(wishMessage) wishMessage.innerHTML=`Happy New Year <b>${n}</b> 🎉`;
};
}

if (shareBtn) {

    shareBtn.onclick = () => {

        const myName = username.value.trim();

        if (!myName) {
            alert("Please enter your name.");
            return;
        }

        const baseUrl = "https://hemasanju89-debug.github.io/happynewyear/";

        const shareLink = baseUrl + "?name=" + encodeURIComponent(myName);

        const message =
`🎉✨ HAPPY NEW YEAR 2027 ✨🎉

💝 ${myName} has sent you a Special New Year Greeting Card.

🎁 Open your surprise here 👇

${shareLink}

❤️ After opening the page:

✅ Enter your name
✅ Create your own greeting card
✅ Share it with your family & friends

🎆 Spread Happiness...
Happy New Year 2027 🎉`;

        window.open(
            "https://wa.me/?text=" + encodeURIComponent(message),
            "_blank"
        );

    };

}

if(musicBtn&&bgMusic){
musicBtn.onclick=()=>{
 if(bgMusic.paused){bgMusic.play();}else{bgMusic.pause();}
};
}

if(themeBtn){
themeBtn.onclick=()=>document.body.classList.toggle("light");
}
