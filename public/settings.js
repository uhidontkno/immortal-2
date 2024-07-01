let themes = ["night","mocha","macchiato","frappe","latte","light"];
let themeDisplay = ["Night","Catppuccin Mocha","Catppuccin Macchiato","Catppuccin Frappe","Catppuccin Latte","Light"];
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
    localStorage["emergConf"] = `${document.querySelector("emergKey").value || "None"};${btoa(document.querySelector(".emergUrl"))}`
    localStorage["eruda"] = document.querySelector(".erudaToggle").checked;
    let tls = document.querySelector(".tabCloakingSection")
    localStorage["tabCloaking"] = !tls.classList.contains("hidden")
}
function clearChanges() {
    localStorage.clear();
}