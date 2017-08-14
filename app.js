let moment = require('moment');
let chalk = require('chalk');

console.log('It is ' + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
console.log('It is the ' + chalk.magenta(moment().format("DDDo")) + ' day of the year.');

let now = moment();
let startOfDay = now.startOf('day'); // .startOfDay mutates now
now = moment();  // so re-create now with the current time

console.log('It is ' + chalk.cyan(now.diff(startOfDay, 'seconds')) + ' seconds into the day.');

let dst = (now.isDST()) ? 'is' : 'is not'
console.log('It ' + chalk.green(dst) + ' during Daylight Savings Time.');
let leap = (now.isLeapYear()) ? 'is' : 'is not'
console.log('It ' + chalk.red(leap) + ' a leap year.');
