function generateArray(a, b) {
    let arr = new Array();
    for (let n = a; n<= b; n++){
        arr.push(n);
    }
    console.log(arr);
}

let arr = generateArray(1, 5);
