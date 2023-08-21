#!/usr/bin/env node

import {program} from "commander";
import logSymbols from "log-symbols";
import chalk from "chalk";

program
    .version("1.0.0","-v,--version")
    .arguments("<cmd> [others...]")
    .action(function (cmd,others){
        console.log(logSymbols.error,chalk.red("command:"),chalk.red(cmd),chalk.red("is unknown!"))
    })
    .command("create","To create a render-js app based on template!")
    .command("code","Get the error message from the code")
    .parse(process.argv)