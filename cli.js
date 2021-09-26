#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const singleUser =  require('./cli/singleUser/index')

const argv = yargs(hideBin(process.argv)).argv;

if (argv.userMail) {
    singleUser();
    return;
}

console.error("--usermail param is required");
