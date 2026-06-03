const content = document.querySelector("#secondary");
const hint = document.querySelector("#hint");
const offset = document.querySelector("#offset");
let visible = false;

function updateVisibility() {
  if (window.scrollY <= 15 || visible) {
    return;
  }

  visible = true;
  content.classList.add("visible");
  hint.classList.add("invisible");
  offset.classList.add("invisible");
}

window.addEventListener("scroll", updateVisibility);
