const xss = require('xss')

console.log(xss('<script>alert("xss");</script>'))