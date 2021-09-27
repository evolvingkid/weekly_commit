#!/usr/bin/env bash
":"; //# comment; exec /usr/bin/env node --input-type=module - "$@" < "$0"

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import singleUser from "./cli/singleUser/index.js";

import acessConfigFile from "./config/acessConfigFile.js";

import taskListLog from "./services/tasklistLog.js";

const argv = yargs(hideBin(process.argv)).argv;

try {
    
    if (argv.userMail) {
        singleUser();
      } else {
        const configData = await acessConfigFile();
      
        if (configData) {
          if (configData.userEmail) {
            taskListLog({ userEmail: configData.userEmail });
          }
        }
      }

      
} catch (error) {

    console.log('error Occured', error);
    
}

