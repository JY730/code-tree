const fs = require("fs")
const input = fs.readFileSync(0).toString().split(" ")

let a = Number(input[0])
let b = Number(input[1])

if(a < b){
    console.log(b - a)
} 