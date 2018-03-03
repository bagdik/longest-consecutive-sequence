module.exports = function longestConsecutiveLength(array) {
  // your solution here
   let sorted_arr = array.sort(function(a, b){
        return a - b;
    });
        
    let first = sorted_arr[0];
    let long = 1;
    let count = 0;
    let result = [];
    while(count < array.length/2){
        for(let i = 1; i <= sorted_arr.length; i++){
        if (sorted_arr[i] - first === 1){
            long++;
            first = sorted_arr[i];
            count++;
        } else if( sorted_arr[i] - first === 0){
            first = sorted_arr[i];
            count++;
        } else {
            result.push(long);
            long = 1;
            first = sorted_arr[i];
            count++;
        }
    }
    }
    let max = result[0];
    for(let i = 0; i < result.length; i++){
        if(max < result[i]){
            max = result[i];
        }
    }
	if(!max) max = 0;
    return max;
}
