function solution(price, money, count) {
    /*
    var answer = -1;
    let sum = 0;
    
    for(i=1; i<=count; i++){
        sum += price * i;    
    }
    
    if(sum > money) {
        answer = sum - money;
    } else {
        answer = 0;
    }

    return answer;*/
    
    let sum = 0;
    for(i=1; i<=count; i++){
        sum += price*i;
    }
    // console.log(sum)
    
    if(sum > money){
        return sum - money
    } else {
        return 0;
    }
    
}