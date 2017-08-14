let moment = require('moment');
let chalk = require('chalk');

console.log('It is ' + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
