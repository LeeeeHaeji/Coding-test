function solution(num) {
    var answer = 0;
    var cnt = 0;
    
    if(num == 1){
        cnt = 0;
    }
    
    // &&: 둘중 하나가 거짓일 경우 거짓, ||: 둘다 모두 거짓일 경우 거짓
    while((num !== 1) && (cnt <= 500)){
        if(num%2 == 0){
            num = num / 2;
        }
        else {
            num = num * 3 + 1;
        }
        cnt++;    
    }
    
    if(cnt > 500){
        cnt = -1;
    }
    
    answer = cnt;
    
    return answer;
}