const { exec } = require('child_process');
const moment = require('moment')

let userEmail = process.argv.slice(2);

console.log(`User email: ${userEmail}`);

let todayDate = new Date();

let startingDate = new Date();
startingDate.setDate(todayDate.getDate() - (todayDate.getDay()));

startingDate.setDate(startingDate.getDate() - 1)

const startingDateFormat = moment(startingDate).format("YYYY-M-D");

console.log(`Date from ${startingDateFormat} \n`);

const gitCommand = `git log --oneline --author="${userEmail}" --after="${startingDateFormat}"`;

console.log('commits done \n \n');

exec(gitCommand, (err, stdout, stderr) => {
    const commitMsg = stdout.split(" ").slice(1).join(" ");

    console.log(commitMsg);
   });