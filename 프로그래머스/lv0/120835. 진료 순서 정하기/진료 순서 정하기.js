function solution(emergency) {
    var answer = [];
    let index_arr = [];
    let result_arr = [];
    
    index_arr = [...emergency].sort((a, b) => b - a);
    
    for(i=0; i<index_arr.length; i++){
        let num = emergency[i];
        result_arr[i] = index_arr.indexOf(num) + 1;
    }
    
    answer = result_arr;
    
    return answer;
}