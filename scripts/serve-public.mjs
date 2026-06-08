import { spawn, spawnSync } from "node:child_process";

const args = process.argv.slice(2);

function readArg(name, fallback) {
  const flag = `--${name}`;
  const direct = args.find((arg) => arg.startsWith(`${flag}=`));
  if (direct) return direct.slice(flag.length + 1);
  const index = args.indexOf(flag);
  if (index >= 0) return args[index + 1];
  return fallback;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForHttp(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await sleep(1000);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`${command} ${commandArgs.join(" ")} failed`);
  }
}

const port = readArg("port", process.env.PORT ?? "3030");
const password = readArg("password", process.env.SLIDEV_REMOTE_PASSWORD ?? "course-preview");
const entry = readArg("entry", "build/slides/ai-coding-bootcamp-7h.slidev.md");

run("node", ["scripts/generate-slidev.mjs"]);

const slidev = spawn("npx", [
  "--yes",
  "slidev",
  entry,
  "--remote",
  password,
  "--bind",
  "0.0.0.0",
  "--port",
  port
], { stdio: ["ignore", "pipe", "pipe"] });

slidev.stdout.on("data", (chunk) => process.stdout.write(chunk));
slidev.stderr.on("data", (chunk) => process.stderr.write(chunk));

const localUrl = `http://127.0.0.1:${port}/`;
await waitForHttp(localUrl);

const tunnel = spawn("npx", [
  "--yes",
  "localtunnel",
  "--port",
  port,
  "--local-host",
  "127.0.0.1"
], { stdio: ["ignore", "pipe", "pipe"] });

let publicUrl = "";
tunnel.stdout.on("data", async (chunk) => {
  const text = chunk.toString();
  process.stdout.write(text);
  const match = text.match(/https:\/\/\S+\.loca\.lt/);
  if (!match || publicUrl) return;
  publicUrl = match[0];
  await waitForHttp(publicUrl);
  console.log(`\nPublic slide show: ${publicUrl}`);
  console.log(`Local slide show:  http://localhost:${port}/`);
  console.log(`Presenter mode:     http://localhost:${port}/presenter/?password=${password}`);
});
tunnel.stderr.on("data", (chunk) => process.stderr.write(chunk));

function shutdown() {
  tunnel.kill("SIGTERM");
  slidev.kill("SIGTERM");
}

process.on("SIGINT", () => {
  shutdown();
  process.exit(130);
});
process.on("SIGTERM", () => {
  shutdown();
  process.exit(143);
});

