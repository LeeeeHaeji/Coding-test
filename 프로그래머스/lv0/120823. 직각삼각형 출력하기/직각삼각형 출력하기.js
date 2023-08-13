const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let str = '*'

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(i=1; i<=input; i++){
        console.log(str.repeat(i))
    }
});

