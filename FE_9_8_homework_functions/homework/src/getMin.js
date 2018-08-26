function getMin(){
	let min = arguments[0];
	let i = 0;
    for(i = 0; i <= arguments.length; i++){
		if (arguments[i] < min){
			min = arguments[i];
		}
	}
	return min;
}
//console.log(getMin(2,4,6,7,70));