// ── Starfield ──
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    a: Math.random(),
    s: Math.random() * 0.005 + 0.002
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.a += s.s;
    if (s.a > 1 || s.a < 0) s.s *= -1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,233,160,${s.a})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resize();
window.addEventListener('resize', resize);
drawStars();

// ── Envelope open ──
function openEnvelope() {
  const wrap = document.getElementById('envWrap');
  const hint = document.getElementById('tapHint');
  const overlay = document.getElementById('env-overlay');
  const main = document.getElementById('main');
  if (wrap.classList.contains('opening')) return;
  wrap.classList.add('opening');
  hint.style.opacity = '0';
  setTimeout(() => {
    overlay.classList.add('hide');
    document.body.style.overflow = 'auto';
  }, 1900);
  setTimeout(() => {
    main.classList.add('visible');
  }, 2100);
}

document.body.style.overflow = 'hidden';
