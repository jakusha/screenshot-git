import puppeteer from "puppeteer";
async function runBrowser() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(" http://127.0.0.1:5173/");
	await page.screenshot({ path: "screenshot.png" });
	await browser.close();
}

runBrowser();
