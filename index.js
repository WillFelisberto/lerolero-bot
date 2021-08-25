const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
// import getRandomQuote from './getRandomQuote';

// import { parse } from 'node-html-parser';
const getRandomQuote = require('./getRandomQuote');

setInterval(async () => {
	await getRandomQuote();
	//}, 1000 * 60 * 60 * 2);
}, 1000);

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));
