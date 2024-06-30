// Ultravoilet v3 code, subject to MIT license.
"use strict";
const form = document.getElementById("form");
const address = document.getElementById("address");
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
});
