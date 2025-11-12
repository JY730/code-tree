const fs = require("fs")
let a = fs.readFileSync(0).toString().trim().split("-")

let m = a[0]
let d = a[1]
let y = a[2]

console.log(`${y}.${m}.${d}`)