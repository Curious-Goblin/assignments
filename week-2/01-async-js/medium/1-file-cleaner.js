// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let fs = require('fs')
let s, a = 0, g;
let filePath = "/home/sourabh/Documents/100xdev/assignments/week-2/01-async-js/medium/a.txt"
function readAndWriteToFile(cb) {
    fs.readFile(filePath, "utf-8", function (err, data) {
        if (err) {
            console.log("error has occured")
        }
        else {
            let s = data;
            const wordsWithArray=s.split(/\s+/);
            const stringWithOneWhiteSpace=wordsWithArray.join(' ')
            fs.writeFile(filePath, stringWithOneWhiteSpace, "utf-8", function (err) {
                if (err) {
                    console.log("error has occured")
                }
                else 
                {
                    fs.readFile(filePath,"utf-8",function(err,data)
                    {
                        cb(data);
                    })
                }
            },
                console.log("the content has been written on the file"))
        }
    })
}
function readFile(cb) {
    fs.readFile(filePath, "utf-8", function (err, data) {
        if (err) {
            console.log("error has occured")
        }
        else {
            cb(data);
        }
    })
}
function onDone(data) {
    console.log(data);
}
// for(let i=0;i<10000000000;i++)
// {
//     a+=1;
// }
readAndWriteToFile(onDone);
// readFile(onDone);