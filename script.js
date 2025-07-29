
const title = "FocusZen: A Retro Calm";
const titleEl = document.getElementById("title");
let i = 0;
function animateTitle() {
  if (i < title.length) {
    titleEl.innerHTML += title.charAt(i);
    i++;
    setTimeout(animateTitle, 80);
  }
}
animateTitle();

// Falling leaves
for (let i = 0; i < 25; i++) {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.top = -Math.random() * 200 + "px";
  leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
  leaf.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(leaf);
}
