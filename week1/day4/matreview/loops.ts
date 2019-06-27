let times:number = 0;
let times2:number = 0;

while(times < 10) {
    console.log("nota " + (times+1));
    times++;
}

do {
    console.log("nota " + (times+1));
    times++;
} while (times < 10);

while(times2 < 10) {
    times2++;
    console.log("nota", times2);
}

for (let i:number = 0; i < 100; i++) {
    console.log(i);
}