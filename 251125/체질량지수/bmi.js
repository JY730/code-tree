const fs = require("fs")

const input = fs.readFileSync(0).toString().split(" ")

let h = Number(input[0])
let w = Number(input[1])

b = parseInt((10000 * w) / (h * h))

console.log(b)
if ( b >= 25 ){
    console.log("Obesity")
}