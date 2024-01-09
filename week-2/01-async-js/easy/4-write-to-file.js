// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
let fs = require('fs')
let a = 0;
let filePath = "/home/sourabh/Documents/100xdev/assignments/week-2/01-async-js/easy/a.txt"
let contentToWrite = "is the content to write in the file"
function writeToFile() {
    fs.writeFile(filePath, contentToWrite, "utf-8", function (err) {
    },
        console.log("the content has been written on the file"))
}
function readFile(cb) {
    fs.readFile(filePath, "utf-8", function (err, data) {
        cb(data);

    },console.log("the file has been read"))
}
function onDone(data) {
    console.log(data)
}
readFile(onDone)
for (let i = 0; i < 10000000000; i++) {
    a += 1;
}
writeToFile()
for (let i = 0; i < 10000000000; i++) {
    a += 1;
}
readFile(onDone);