// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 
let a=1;
const fs = require('fs')
let filePath = "/home/sourabh/Documents/100xdev/assignments/week-2/01-async-js/easy/a.txt"
function readFile(cb) {
    fs.readFile(filePath, "utf-8", function (err, data) {
        cb(data);
    });
}
for(let i=0;i<100000000000;i++)
{
    a+=1;
}
function onDone(data) {
    console.log(data)
}

readFile(onDone);