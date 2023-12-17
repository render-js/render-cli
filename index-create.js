import {program} from "commander";
import currentDir from "./runtime.js";

program.
    command("create")
    .description("To create a project")
    .option("-d,--dir <directory>","Point out the directory you want to generate", process.cwd())
    .action(function (){
        currentDir(process.cwd())
    })
    .parse(process.argv)