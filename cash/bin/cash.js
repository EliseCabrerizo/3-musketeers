'use strict';

const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const currencies = require('../lib/currencies.json');

const {API} = require('./constants');

//Recupere les parametres de index.js 
//Ils peuvent être par defaut ou entres
const cash = async command => {
	const {amount} = command;
	const from = command.from.toUpperCase();
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());

	console.log();
	//La valeur qui sera convertie, sera ecrite en verte
	const loading = ora({
		text: 'Converting...',
		color: 'green',
		spinner: {
			interval: 150,
			frames: to
		}
	});

	loading.start();

	//Se connecte sur internet
	//Si ce n'est pas possible demande de verifier la connection internet ou dit que le serveur n'est pas accessible
	await got(API, {
		json: true
	}).then(response => {
		//Recupere les taux de changes actuels
		money.base = response.body.base;
		money.rates = response.body.rates;

		//Verifie que la devise existe et si elle existe afficher sa valeur et en quelles devises
		//Sinon affiche que la devise rentree n'existe pas
		to.forEach(item => {
			if (currencies[item]) {
				loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(3))} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});

		//Affcihe la demande d'origine (ce qu'on voulait convertir)
		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
	}).catch(error => {
		if (error.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red(`Internal server error :(\n${error}`));
		}
		process.exit(1);
	});
};

module.exports = cash;
