let fs=require("fs"),a=0
fs.readFile("a.txt","utf-8",function(err,data)
{
    console.log(data);
})
console.log("hello this is the second async function i am knowing")
