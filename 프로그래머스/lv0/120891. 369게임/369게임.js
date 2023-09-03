function solution(order) {
    var answer = 0;
    let cnt = 0;
    
    order = order.toString();
    order = order.split('')
    
    for(i=0; i<order.length; i++){
        if((order[i] === "3") || (order[i] === "6") || (order[i] === "9")){
            cnt++
        }
    }
    
    answer = cnt
    
    return answer;
}