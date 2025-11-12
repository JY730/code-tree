const fs = require("fs")
let a = fs.readFileSync(0).toString().trim().split(":")

let h = Number(a[0])
let m = Number(a[1])

const rs = h + 1

console.log(`${rs}:${m}`)