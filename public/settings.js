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