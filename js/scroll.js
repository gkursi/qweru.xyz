const content = document.querySelector("#secondary");
const hint = document.querySelector("#hint");
const offset = document.querySelector("#offset");

let visibility = false;
let roffset = false;

function updateVisibility() {
  if (window.scrollY <= 15 || visibility) {
    return;
  }

  visibility = true;
  content.classList.add("visible");
  hint.classList.add("invisible");
}

function removeOffset() {
  if (
    window.scroll <= offset.getBoundingClientRect().bottom ||
    roffset ||
    !visibility
  ) {
    return;
  }

  roffset = true;

  offset.classList.add("invisible");
}

window.addEventListener("scroll", updateVisibility);
window.addEventListener("scroll", removeOffset);
