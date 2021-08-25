const Bot = require('./config');
const puppeteer = require('puppeteer');

const getRandomQuote = async () => {
	const browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	});
	const page = await browser.newPage();
	await page.goto('https://lerolero.com/');
	const lerolero = await page.evaluate(
		() =>
			document.getElementsByClassName('sentence sentence-exited')[0].innerHTML
	);
	await browser.close();

	console.log(lerolero);

	Bot.post(
		'statuses/update',
		{
			status: lerolero,
		},
		function (err, _data, _response) {
			console.log(err);
		}
	);
};

module.exports = getRandomQuote;
