function solution(a, b) {
    var answer = 0;
    let cnt = 2;
    let b_factors = [];
    
    // 1. 기약분수로 변환
    while(cnt<=a){
        if(a%cnt === 0 && b%cnt === 0){
            a = a/cnt;
            b = b/cnt;
        } else {
            cnt++;
        }
    }
    
    // 2. 분모의 소인수 구하기
    cnt = 2;
    while(cnt<=b){
        if(b%cnt === 0){
            b = b/cnt;
            b_factors.push(cnt)
        } else {
            cnt++;
        }
    }

    if(b_factors.filter((v) => v!==2 && v!==5).length > 0){
        answer = 2;
    } else {
        answer = 1;
    }
    
    return answer;
}