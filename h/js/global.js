console.log("Loading darkmode...")

import "https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js";

function addDarkmodeWidget() {
  new Darkmode().showWidget()
}

window.addEventListener('load', addDarkmodeWidget);
