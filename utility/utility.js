import fs from "fs";
import logSymbols from "log-symbols";
import download from "download-git-repo";
import child_process from "child_process";

function currentDir(dir){
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log(logSymbols.error,"error:",err.message);
            process.exit(0);
        }else {
            if (files.length === 0){
                console.log(logSymbols.info,"Start to download template form github...")
                download("github:render-js/render-template",dir,{},function (error) {
                    console.log(error.message)
                    process.exit(2)
                })
                console.log(logSymbols.success,"Template have been downloaded successfully")
                console.log(logSymbols.info,"Start to install npm dependencies...")
                child_process.execFile("npm",["install"],function (error, stdout, stderr) {
                    console.log(logSymbols.error,error.message)
                })
            }else {
                console.log(logSymbols.warning,"The path is not empty!");
                process.exit(1)
            }
        }
    })
}

function targetDir(dir){
    fs.readdir(dir, (err, files) => {
        if (err) {
            if (err.code === "ENOENT"){
                fs.mkdir(dir,{recursive:true},function (err,path){
                    download("github:render-js/render-template",dir,{},function (error) {
                        console.log(error.message)
                    })
                })
            }else {
                console.log(logSymbols.error,"error:",err.message)
            }
        }else {
            if (files.length === 0){
                console.log(logSymbols.info,"Start to download template form github...")
                download("github:render-js/render-template",dir,{},function (error) {
                    console.log(error.message)
                    process.exit(2)
                })
                console.log(logSymbols.success,"Template have been downloaded successfully")
                console.log(logSymbols.info,"Start to install npm dependencies...")
                child_process.exec("npm install",function (error, stdout, stderr) {
                    console.log(logSymbols.error,error.message)
                })
            }else {
                console.log(logSymbols.warning,"The path is not empty!");
                process.exit(1)
            }
        }
    })
}

export {currentDir,targetDir}