import {program} from "commander";
import fs from "fs";
import logSymbols from "log-symbols";

program.
command("readme")
    .description("To generate a readme markdown file!")
    .action(function (command){
        fs.writeFile("README.md","# Start to readme!",function (err) {
            if (err){
                console.log(logSymbols.error,"Failed to generate readme file!");
            }else {
                console.log(logSymbols.success,"Successfully to generate readme file!");
            }
        })
    })
    .parse(process.argv)