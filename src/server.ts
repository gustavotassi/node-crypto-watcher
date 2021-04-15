import express from 'express';
import rp from 'request-promise';
import fs from 'fs';
import chalk from 'chalk';
import configuration from './setup/configuration';

const app = express();

const requestOptions = {
  method: 'GET',
  uri: `https://min-api.cryptocompare.com/data/price?fsym=${configuration.crypto}&tsyms=${configuration.currency}&api_key=${configuration.apiKey}`,
  json: true,
  gzip: true
};

if (!fs.existsSync('./results/')) {
  fs.mkdirSync('./results/');
}

const createFiles = fs.createWriteStream('./results/values.txt', {
  flags: 'a'
});

setInterval(() => {
  rp(requestOptions).then(response => {

    const value = Number(response.BRL) * Number(configuration.balance);

    createFiles.write(`${value.toFixed(2)} / ${response.BRL.toFixed(2)} ${configuration.currency} - ${new Date()} \r\n`);

  }).catch((err) => {

    console.log(`[${chalk.black.bgRed('ERROR')}] ${new Date()} : ${chalk.red(err.error)}`);
    createFiles.write('ERROR: ' + err.error + ' - ' + new Date() +'\r\n');

  });
}, Number(configuration.apiInterval));

app.listen(configuration.port, () => {
  console.log(`App listening at http://localhost:${configuration.port}`);
});
