var args = process.argv.slice(2);
var sum = 0;

args.forEach(i => { sum = sum + Number(i) });

console.log(sum);
