import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
page.on("console", (msg) => console.log("BROWSER:", msg.type(), msg.text()));
page.on("pageerror", (err) => console.log("PAGEERROR:", err.message));

await page.goto("http://127.0.0.1:3000/contact-us", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

const name = page.getByPlaceholder("Your Full Name");
await name.fill("Ali Rahman");
await page.getByPlaceholder("Your Mobile Number").fill("01169791148");
await page.getByPlaceholder("Your Email Address").fill("ali@example.com");
await page.getByPlaceholder("Your Subject").fill("AC Chemical Wash");
await page.getByPlaceholder("Write Something Here...").fill("Need chemical wash for 2 units");

console.log("values before click", await name.inputValue());

await page.getByRole("button", { name: /submit now/i }).click();
await page.waitForTimeout(1200);

const banner = page.getByText("Thank you! Your message has been received");
const visible = await banner.isVisible().catch(() => false);
console.log("success banner visible:", visible);
console.log("url:", page.url());

await page.screenshot({
  path: "/opt/cursor/artifacts/screenshots/contact-form-success.png",
  fullPage: false,
});
await page.screenshot({ path: "/tmp/contact-form-success-full.png", fullPage: true });

await browser.close();
process.exit(visible ? 0 : 1);
