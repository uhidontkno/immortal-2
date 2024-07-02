let themes = ["black","night","dark","dim","synthwave","mocha","macchiato","frappe","latte","light","cupcake","nord"];
let themeDisplay = ["OLED","Night","Dark","Dim","Synthwave","Catppuccin Mocha","Catppuccin Macchiato","Catppuccin Frappe","Catppuccin Latte","Light","Cupcake","NordVPN"];
for (let i = 0; i < themes.length; i++) {
document.querySelector(".themeDropdownContent").innerHTML += `<li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-center"
        aria-label="${themeDisplay[i]}"
        data-theme="${themes[i]}"
        value="${themes[i]}" onclick="setTheme('${themes[i]}')" />
    </li>`
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

function tabCloakEvent() {
    let ico = document.querySelector(".tabIco").value;
    let name = document.querySelector(".tabName").value;
    if (ico.startsWith("http")) {
    document.querySelector(".tab-active img").src = ico;
    } else {
        document.querySelector(".tab-active img").src = "img/64.jpg";
    }
    document.querySelector(".tab-active span").innerText = name;
}

function toggleTabCloaking() {
    let tls = document.querySelector(".tabCloakingSection")
    tls.classList.toggle("hidden")
    localStorage["tabCloaking"] = !tls.classList.contains("hidden")
}

function toggleEruda() {
    localStorage["eruda"] = document.querySelector(".erudaToggle").checked
}

function saveChanges() {
    localStorage["tabCloakConf"] = `${btoa(document.querySelector(".tabName").value)};${btoa(document.querySelector(".tabIco").value)}`
    localStorage["emergConf"] = `${document.querySelector(".emergKey").innerText || "None"};${btoa(document.querySelector(".emergUrl").value)}`
    localStorage["eruda"] = document.querySelector(".erudaToggle").checked;
    let tls = document.querySelector(".tabCloakingSection")
    localStorage["tabCloaking"] = !tls.classList.contains("hidden")
}
function clearChanges() {
    localStorage.clear();
}
document.querySelector(".kbd").addEventListener("keydown",(e)=>{
    e.preventDefault();
    document.querySelector(".kbd").innerText = e.key;
})
if (Boolean(localStorage["tabCloaking"])) {
    tls.classList.remove("hidden")
}

document.querySelector(".erudaToggle").checked = Boolean(localStorage["eruda"]);
if (localStorage["emergConf"]) {
    let ec = localStorage["emergConf"].split(";")
    document.querySelector(".emergKey").innerText = ec[0]
    document.querySelector(".emergUrl").value = atob(ec[1])
}
if (localStorage["tabCloakConf"]) {
    let tcc = localStorage["tabCloakConf"].split(";")
    document.querySelector(".tabIco").value = atob(tcc[1]);
    document.querySelector(".tabName").value = atob(tcc[0]);
}