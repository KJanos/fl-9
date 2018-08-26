function getClosedToZero(){
    let min = Math.abs(arguments[0]);
    for(let i = 0; i<arguments.length; i++){
        if (arguments[i]===0){
            min = 0;
            break;
        }else if (Math.abs(arguments[i]) < min){
            min = arguments[i];
        }
    }
    return min;
}

//console.log(getClosedToZero(1,3,3,-9));