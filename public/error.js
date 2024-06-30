// Ultravoilet v3 code, subject to MIT license.
"use strict";

if (location.pathname.startsWith(__uv$config.prefix)) {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    
    alert(err.toString());
  }
}

