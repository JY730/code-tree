const fs = require("fs")
const input = fs.readFileSync(0).toString().split(" ")

let A = Number(input[0])
let B = Number(input[1])

c = (A + B)/2

console.log(A + B, c.toFixed(1))