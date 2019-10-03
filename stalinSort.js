let stalin_arr = [1, 2 ,3, 1, 4, 1, 12, 51, 1, 31, 66];
let shukusei = [];
let max = 0;


stalin_arr.filter(i => {
    if (i > max) {
        max = i;
        shukusei.push(max);
    }
})

console.log(shukusei)