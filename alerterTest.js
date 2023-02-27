const obj = require('./alerter.js');

obj.alertInCelcius(400.5);
obj.alertInCelcius(303.6);
console.log(`${obj.alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
