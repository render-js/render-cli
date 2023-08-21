import {program} from "commander";

program.
    command("code")
    .description("To create a project")
    .option("-n,--number <number>","The code number")
    .action(function (command){
        console.log(command.number)
    })
    .parse(process.argv)