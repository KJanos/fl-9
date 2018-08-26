function reverseNumber(number) {
    let arr = number.toString().split('');
    let reverse='';
    const magicnum = -1;
    let reversenum;
    if (arr[0] ==='-'){
        for (let i = arr.length-1; i>0; i--){
            reverse += arr[i];
            reversenum = parseInt(reverse) * magicnum;
        }
    } else {
        for (let i = arr.length-1; i>=0; i--){
            reverse += arr[i];
        }
        reversenum = parseInt(reverse);
    }
    return reversenum;
}

//console.log(reverseNumber(1000));