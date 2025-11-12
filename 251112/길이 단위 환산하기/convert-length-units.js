const fs = require("fs")
let a = Number(fs.readFileSync(0).toString())
const rs = a * 30.48
console.log(rs.toFixed(1))