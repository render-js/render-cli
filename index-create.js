import {program} from "commander";
import {currentDir, targetDir} from "./utility/utility.js";
import path from "path";

program.
    command("create")
    .description("To create a project")
    .alias("c")
    .version("1.0.0")
    .option("-d,--dir <directory>","Point out the directory you want to generate",process.cwd())
    .action(function (command){
        if (command.dir === process.cwd){
            currentDir(process.cwd())
        }else {
            targetDir(process.cwd()+path.sep+command.dir)
        }
    })
    .parse(process.argv)