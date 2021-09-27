import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import taskListLog from "../../services/tasklistLog.js";


const singleUser = () => {
  const argv = yargs(hideBin(process.argv)).argv;

  const userEmail = argv.userMail;

  console.log(`User email: ${argv.userMail}`);

  taskListLog({userEmail: userEmail})

};

export default singleUser;
