const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('Rangga')} - Credit : Rangga Store
`);

  const auth = rs.question('Enter Authentication Code! : ');
  console.log('');

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.white(`\r[ ${moment().format('HH:mm:ss')} ] Authentication Code Not Valid`));
      break;

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const Account = data.User.Account;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ] ${chalk.red(`User : ${Account}`)} | ${chalk.yellow(`Trophy : ${trophy}`)} | ${chalk.green(`Crown : ${crown}`)}`));
      await sleep(5000);

    } else if (result == 'Kasian Kena Ban') {
      console.log(chalk.bgRed(`Tobatt Akun Lu Dah Kena Ban`));
     break;
    }
  }


})();
