#!/usr/bin/env node

import {program} from "commander";

program
    .command("create <name> [directory]")
    .description("To create a render-js app based on template!")
    .version("1.0.0","-v,--version")
    .action(function (cmd,name,directory,command){
        console.log(name)
    })
    .parse(process.argv)