// This file overwrites the stock UV config.js
// Ultravoilet v3 code, subject to MIT license.

self.__uv$config = {
  prefix: "/sda/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/sda/uv.handler.js",
  client: "/sda/uv.client.js",
  bundle: "/sda/uv.bundle.js",
  config: "/sda/uv.config.js",
  sw: "/sda/uv.sw.js",
};
