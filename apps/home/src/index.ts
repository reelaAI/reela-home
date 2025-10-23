import { Hono } from "hono";
import { html } from "hono/html";
import layout from "./pages/layout";
import Main from "./pages/main";
import IconsDemo from "./pages/icons-demo";
import { logger } from "hono/logger";
import { serveStatic } from "@hono/node-server/serve-static";
import { etag } from "hono/etag";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = new Hono();

app.use(logger());

app.use(
  "/*",
  etag(),
  serveStatic({
    root: path.resolve(__dirname, "../public"),
    rewriteRequestPath(path, c) {
      return path.slice("/_pages".length);
    },
  })
);

app.get("/", (c) => {
  return c.html(html`
    ${layout({
      children: Main(),
    })}
  `);
});

app.get("/icons-demo", (c) => {
  return c.html(html`
    ${layout({
      children: IconsDemo(),
    })}
  `);
});

export default app;
