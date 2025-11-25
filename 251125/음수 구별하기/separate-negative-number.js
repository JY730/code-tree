const fs = require("fs")
const a = Number(fs.readFileSync(0).toString())

console.log(a)

if(a / 2 != 0){
    console.log("minus")
} 