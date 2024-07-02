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

document.onkeydown = (e)=>{
  if (!localStorage["emergConf"]) return
  let conf = localStorage["emergConf"].split(";")
  if (e.key == conf[0] && conf[0]) {
    document.location = atob(conf[1])
  }
}
if (localStorage["tabCloaking"] == "true") {
  let conf = localStorage["tabCloakConf"].split(";");
  document.title = atob(conf[0]);
  let link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = atob(conf[1]);
  let oldLink = document.querySelector('link[rel="icon"]');
  if (oldLink) {
      document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

// Konami code sequence using key values
const konamiCode = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];
let konamiCodePosition = 0;

function onKonamiCode() {
  console.log("Konami!");
  let img = document.createElement("img")
  img.src = "img/immortal.gif"
  img.style.position = "fixed"
  img.style.top = "64px"
  img.style.left = "64px"
  img.style.height = "360px"
  img.onclick = ()=>{img.remove();}
  img.style.cursor = "pointer"
  document.body.appendChild(img)
}
document.addEventListener('keydown', function(e) {
  if (e.key === konamiCode[konamiCodePosition]) {
      konamiCodePosition++;
      if (konamiCodePosition === konamiCode.length) {
          onKonamiCode();
          konamiCodePosition = 0;
      }
  } else {
      konamiCodePosition = 0;
  }
});

document.querySelector("button.bookmark-btn.add").addEventListener("click",()=>{
  let url = prompt("Bookmark URL?")
  try {new URL(url)} catch {
    alert("Invalid URL!");return;
  }
  let title = prompt("Bookmark title?")
  if (typeof title != "string") {
    alert("Invalid bookmark title!");return;
  }
  let u = new URL(url);
  let img = u.protocol + "//" + u.host + "/favicon.ico"
  let bookmarks = localStorage["bookmarks"] || "[]";
  bookmarks = JSON.parse(bookmarks);
  bookmarks.push(`${url},${img},${title}`);
  localStorage["bookmarks"] = JSON.stringify(bookmarks)
  updBookmarks()
})

function updBookmarks() {
  let template = document.querySelector("a.bookmark-btn.template").cloneNode(true);
  let bm = document.querySelectorAll("a.bookmark-btn");
  for (let btn of bm) {
    btn.remove();
  }
  let bookmarks = JSON.parse(localStorage["bookmarks"] || "[]");
  for (let i = 0; i < bookmarks.length; i++) {
    let t = template.cloneNode(true);
    let e = bookmarks[i].split(",")
    t.classList.remove("template");
    t.href = e[0]
    t.querySelector("img").src = e[1]
    t.querySelector("span").innerText = e[2]
    document.querySelector(".bmSection").appendChild(t)
  }
  document.querySelector(".bmSection").appendChild(template)
}
setTimeout(()=>{
  updBookmarks()
},500)
