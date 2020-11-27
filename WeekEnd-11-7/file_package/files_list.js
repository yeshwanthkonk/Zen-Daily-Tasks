const { throws } = require('assert')
const fs = require('fs').promises
let stat = fs.stat

let path = './'

async function file_list(){
    var file_list = {'dir': [], 'file': []}
    let files = await fs.readdir(path);
    for (const file of files){
        try {
            if((await stat(path+file)).isDirectory())
                file_list['dir'].push(file)
            else
                file_list['file'].push(file)
        } catch (error) {
            return String(error);
        }      
    }
    return file_list;
}

async function file_timestamp_creation(){
    let date = new Date();
    let stamp = `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}-${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`
    await fs.writeFile(`./Files/${stamp}.txt`, `${stamp}/Milliseconds->${date.getTime()}`, (err)=>{
        if(err)
            return false;
    })
    return true;
}

module.exports = {file_list, file_timestamp_creation}