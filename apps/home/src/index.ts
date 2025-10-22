import { Hono } from "hono";
import { html } from "hono/html";
import layout from "./pages/layout";
import Main from "./pages/main";
import { logger } from "hono/logger";
import { serveStatic } from "@hono/node-server/serve-static";
import { etag } from "hono/etag";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = new Hono();

app.use(logger());

app.use(
  "/_pages/*",
  etag(),
  serveStatic({
    root: path.resolve(__dirname, "../assets"),
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

export default app;

// serve(
//   {
//     fetch: app.fetch,
//     port: process.env.PORT ? Number(process.env.PORT) : 3000,
//   },
//   (info) => {
//     console.log(`Server is running at http://localhost:${info.port}`);
//   }
// );
