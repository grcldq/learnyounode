const fs = require('fs');

const strBuffer = fs.readFileSync(process.argv[2]).toString();

console.log(strBuffer.split('\n').length - 1);

