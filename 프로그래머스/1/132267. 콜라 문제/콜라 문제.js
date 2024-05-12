function solution(a, b, n) {
    var answer = 0;
    let num = 0;
    
    while((n-a)>=0){
        let cnt = 0;
        while((n-a)>=0){
            n -= a;
            cnt++;
        }
        cnt = cnt*b;
        num += cnt;
        n += cnt;
    }

    return answer=num;
}