let moment = require('moment');
let chalk = require('chalk');

console.log('It is ' + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
console.log('It is the ' + chalk.bgMagenta(moment().format("DDDo")) + ' day of the year.');
let now = moment();
// let startOfDay = now.startOf('day');
// console.log('It is ' + (now.subtract(startOfDay)) + ' seconds into the day.');
let dst = (now.isDST()) ? 'is' : 'is not'
console.log('It ' + chalk.green(dst) + ' during Daylight Savings Time.');
let leap = (now.isLeapYear()) ? 'is' : 'is not'
console.log('It ' + leap + ' a leap year.');
