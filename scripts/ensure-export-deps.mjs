let ok = true;

try {
  await import("playwright-chromium");
} catch {
  ok = false;
}

if (!ok) {
  console.error(
    "PPTX/PDF export requires playwright-chromium. Run: npm i -D playwright-chromium"
  );
  process.exit(1);
}
