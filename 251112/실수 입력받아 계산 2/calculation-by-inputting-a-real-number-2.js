const fs = require("fs")
let a = Number(fs.readFileSync(0).toString())
const rs = a + 1.5
console.log(rs.toFixed(2))
