/* ==========================================
   FIREWORKS.JS
========================================== */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = [];

class Particle{

constructor(x,y,color){

this.x=x;
this.y=y;

this.color=color;

this.radius=Math.random()*3+2;

this.speedX=(Math.random()-0.5)*10;

this.speedY=(Math.random()-0.5)*10;

this.alpha=1;

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

this.speedY+=0.05;

this.alpha-=0.015;

}

draw(){

ctx.save();

ctx.globalAlpha=this.alpha;

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

ctx.restore();

}

}

function createFirework(){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*0.6;

const colors=[

"#ff1744",
"#ffea00",
"#00e676",
"#00b0ff",
"#ff9100",
"#7c4dff",
"#ffffff"

];

const color=

colors[Math.floor(Math.random()*colors.length)];

for(let i=0;i<80;i++){

particles.push(

new Particle(x,y,color)

);

}

}

setInterval(createFirework,900);

function animate(){

ctx.clearRect(

0,
0,
canvas.width,
canvas.height

);

for(let i=particles.length-1;i>=0;i--){

particles[i].update();

particles[i].draw();

if(particles[i].alpha<=0){

particles.splice(i,1);

}

}

requestAnimationFrame(animate);

}

animate();