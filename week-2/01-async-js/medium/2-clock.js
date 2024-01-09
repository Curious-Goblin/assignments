// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// let a = "00", b = "00", c = "00", number1 = 0, number2 = 0, number3 = 0;
// let s = "00:00:00";
const readline = require('readline')
function makeMyClock() {
    // number1 = parseInt(a);
    // number2 = parseInt(b);
    // number3 = parseInt(c);
    // number1 += 1;
    // if (number1 == 60) {
    //     number2 += 1;
    //     number1 = 0;
    // }
    // else if (number2 == 60) {
    //     number2 = 0;
    //     if (number3 == 12) {
    //         number3 = 1;
    //     }
    //     else {
    //         number3 += 1;
    //     }
    // }
    // if (number1 % 10 == number1) {
    //     a = `0` + `${number1}`;
    // }
    // else {
    //     a = `${number1}`;
    // }
    // if (number2 % 10 == number2) {
    //     b = `0` + `${number2}`;
    // }
    // else {
    //     b = `${number2}`;
    // }
    // if (number3 % 10 == number3) {
    //     c = `0` + `${number3}`;
    // }
    // else {
    //     c = `${number3}`;
    // }
    // if (c < 12) {
    //     s = `${c}:${b}:${a} AM`
    // }
    // else {
    //     s = `${c}:${b}:${a} PM`
    // }

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    console.log(time);
    // console.log(s);
}
setInterval(() => {
    makeMyClock();
}, 1000);

