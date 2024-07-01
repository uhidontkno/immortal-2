// Parts of Ultravoilet v3 code, subject to MIT license.
"use strict";
const form = document.getElementById("form");
let address = document.getElementById("address");
const searchEngine = "duckduckgo.com";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    alert(err.toString());
    throw err;
  }

  const url = search(address.value, searchEngine.value);

  let frame = document.getElementById("frame");
  frame.style.display = "block";
  frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  removeShit()
});


function removeShit() {
  let si = document.querySelector(".searchInput").cloneNode(true)
  document.querySelector(".contain").remove()
  document.querySelector("footer").remove()
  document.querySelector("nav").appendChild(si)
  si.querySelector(".btn").addEventListener("click",()=>{
    const url = search(document.getElementById("address").value, searchEngine.value);
    let frame = document.getElementById("frame");
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
  })
}


function setTheme(theme) {
    let themeName = theme;
    document.querySelector("html").setAttribute("data-theme",themeName);
    localStorage.setItem("theme",themeName);
}

if (localStorage.getItem("theme")) {
    setTheme(localStorage.getItem("theme"));
}
function eruda() {
  (function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
}
if (localStorage["eruda"] == "true") {
  eruda()
}