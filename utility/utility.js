import fs from "fs";
import logSymbols from "log-symbols";
import download from "download-git-repo";

/**
 * Not indicate the path wanted to generate project.
 * @param dir
 */
export function currentDir(dir){
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log(logSymbols.error,"error:",err.message);
            process.exit(0);
        }else {
            if (files.length === 0){
                console.log(logSymbols.info,"Start to download template form github...")
                download("github:render-js/render-template",dir,{},function (error) {
                    console.log(logSymbols.error,error.message);
                    process.exit(1)
                })

                console.log(logSymbols.success,"Template have been downloaded successfully")
            }else {
                console.log(logSymbols.warning,"Failed to generate project...");
                console.log(logSymbols.warning,"The path is not empty!");
                process.exit(1)
            }
        }
    })
}

/**
 * Indicate the path wanted to generate project.
 * @param dir
 */
export function targetDir(dir){
    fs.readdir(dir, (err, files) => {
        if (err) {
            if (err.code === "ENOENT"){
                fs.mkdir(dir,{recursive:true},function (err){
                    if (err){
                        console.log(logSymbols.error,err.message)
                    }else {
                        download("github:render-js/render-template",dir,{},function (error) {
                            console.log(logSymbols.error,error.message)
                        })
                    }
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
            }else {
                console.log(logSymbols.warning,"The path is not empty!");
                process.exit(1)
            }
        }
    })
}