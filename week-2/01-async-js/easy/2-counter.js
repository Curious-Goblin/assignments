//  ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function counter(b, limit) {
    console.log(b);
    if (b < limit) {
        setTimeout(() => {
            counter(b + 1, limit);
        }, 1000);
    }
}
counter(0, 20);


































































// (Hint: setTimeout)