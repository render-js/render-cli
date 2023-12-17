#!/usr/bin/env node

import {program} from "commander";
import logSymbols from "log-symbols";
import chalk from "chalk";

program
    .version("1.0.0","-v,--version")
    .arguments("<cmd>")
    .action(function (cmd){
        console.log(logSymbols.error,chalk.red("command:"),chalk.red(cmd),chalk.red("is unknown!"))
    })
    .command("create","To create a render-js app based on template!")
    .command("readme","To generate a readme markdown file!")
    .parse(process.argv)