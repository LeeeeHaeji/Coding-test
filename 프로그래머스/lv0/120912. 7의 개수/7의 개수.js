function solution(array) {
    var answer = 0;
    let cnt = 0;
    
    array = array.toString().split(',').join('')
    
    for(i=0; i<array.length; i++){
        if(array[i] === "7"){
            cnt++
        }
    }
    
    answer = cnt
    
    return answer;
}