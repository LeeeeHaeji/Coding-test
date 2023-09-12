function solution(array, n) {
    var answer = 0;
    let cal_arr = [];
    let abs_arr = [];
    let min = 0;
    let min_index = 0;
    
    // 차의 값 계산
    for(i=0; i<array.length; i++){
        cal_arr.push(n - parseInt(array[i]))
        abs_arr.push(Math.abs(n - parseInt(array[i])))
    }
    
    if(cal_arr.includes(0)){
        //최솟값이 0이라면
        min_index = cal_arr.indexOf(min);
        answer = parseInt(array.splice(min_index, 1))
    } else {
        min = Math.min(...abs_arr) // 차의 최솟값
        let mins = []; // 절대값이 같은 최솟값들의 모임
        for(i=0; i<cal_arr.length; i++){
            if(Math.abs(cal_arr[i]) === min){
                mins.push(cal_arr[i])
            }
        }
        min_index = cal_arr.indexOf(Math.max(...mins));
        answer = parseInt(array.splice(min_index, 1))
    }
    
    return answer;
}