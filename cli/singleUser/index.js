const { exec } = require("child_process");
const moment = require("moment");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const singleUser = () => {
  const argv = yargs(hideBin(process.argv)).argv;

  const userEmail = argv.userMail;

  console.log(`User email: ${argv.userMail}`);

  let todayDate = new Date();

  let startingDate = new Date();
  startingDate.setDate(todayDate.getDate() - todayDate.getDay());

  startingDate.setDate(startingDate.getDate() - 1);

  let limitDate = new Date();
  limitDate.setDate(startingDate.getDate() + 1);

  console.log(todayDate, startingDate);

  while (todayDate.getDate() !== startingDate.getDate()) {
    const startingDateFormat = moment(startingDate).format("YYYY-M-D");
    const limitDateFormat = moment(limitDate).format("YYYY-M-D");

    console.log(`Task List ${startingDateFormat} \n`);

    const gitCommand = `git log --pretty=format:'%s' --author="${userEmail}" --after="${startingDateFormat}" --before="${limitDateFormat}"`;

    exec(gitCommand, (err, stdout, stderr) => {
      const commitMsg = stdout.split(" ").slice(1).join(" ");

      console.log(commitMsg);
    });

    startingDate.setDate(startingDate.getDate() + 1);

    limitDate.setDate(startingDate.getDate() + 1);
  }
};

module.exports = singleUser;
