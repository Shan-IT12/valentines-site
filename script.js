function showScreen(id) {
  document.getElementById('screen0').style.display = 'none';
  document.getElementById('screenHi').style.display = 'none';
  document.getElementById('screen1').style.display = 'none';
  document.getElementById('screen2').style.display = 'none';

  document.getElementById(id).style.display = 'block';
}

document.getElementById('envelope').addEventListener('click', function() {
  document.getElementById('envelope').classList.add('open');

  setTimeout(function () {
    showScreen('screenHi');
  }, 800);
});

document.getElementById('btnProceed').addEventListener('click', function (){
  showScreen('screen1');
});

let noCount = 0;
let yesSize = 16;
let noSize = 16;

const reactions = [
  { img: 'sadcat-crying-cat.gif', msg: 'Are you sure?? 😱' },
  { img: 'gritito.gif', msg: 'Please reconsider... 😢' },
  { img: 'crying-cat-sad-kitty.gif', msg: "I'm begging you 😭" },
  { img: 'cry-crying.gif', msg: 'Seryoso ka ba?? 😤' },
  { img: 'cat-crying-cat.gif', msg: 'Hindi pwede yan... 😔' },
  { img: 'banana-cat-banana-cat-crying.gif', msg: 'Okay na please 🥺' },
  { img: 'noo.gif', msg: 'Titigil ka na ba? 😭' },
  { img: 'screaming-cat-browthy.gif', msg: 'Ano ba yan naman 💔' },
  { img: 'cat-scream-cat-screaming.gif', msg: 'Last last chance ha... 😩' },
  { img: 'muhehehe.gif', msg: 'Sige na pleaseeeee 🙏' },
];

document.getElementById('btnNo').addEventListener('click', function() {

  noCount++;

  yesSize += 6;
  noSize -= 3;

  document.getElementById('btnYes').style.fontSize = yesSize + 'px';
  document.getElementById('btnNo').style.fontSize = noSize + 'px';

  if (noCount <= reactions.length) {
    const reaction = reactions[noCount - 1];

    document.getElementById('reactionImg').src = reaction.img;
    document.getElementById('reactionMsg').innerText = reaction.msg;
  }

  if (noCount >= 10) {
    document.getElementById('btnNo').style.display = 'none';
    document.getElementById('noChoiceMsg').style.display = 'block';
  }
});

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      color: "hsl(" + Math.random() * 360 + ",100%,50%)"
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < confetti.length; i++) {
    let c = confetti[i];

    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();

    c.y += 2;

    if (c.y > canvas.height) {
      c.y = 0;
    }
  }

  requestAnimationFrame(drawConfetti);
}

function typeText(element, text) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();
}

document.getElementById('btnYes').addEventListener('click', function() {

  showScreen('screen2');

  createConfetti();
  drawConfetti();

  const letter = document.querySelector('#letter p');
  const message = "You just made me the happiest person alive 💖 Thank you for saying YES!";

  typeText(letter, message);

});

