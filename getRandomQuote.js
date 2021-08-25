const Bot = require('./config');
const puppeteer = require('puppeteer');

const getRandomQuote = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://lerolero.com/');
	const lerolero = await page.evaluate(
		() =>
			document.getElementsByClassName('sentence sentence-exited')[0].innerHTML
	);

	console.log(lerolero);

	// Bot.post(
	// 	'statuses/update',
	// 	{
	// 		status: lerolero,
	// 	},
	// 	function (err, _data, _response) {
	// 		console.log(err);
	// 	}
	// );
	await browser.close();
};

module.exports = getRandomQuote;
