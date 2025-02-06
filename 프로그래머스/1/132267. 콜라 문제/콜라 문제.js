function solution(a, b, n) {
    var answer = 0;
    /*
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
    */
    
    let bottle = n;
    let return_cnt = 0;
    
    while(bottle >= a){
        return_cnt = parseInt(bottle/a);
    
        bottle = bottle - return_cnt*a + return_cnt*b;
        answer += return_cnt*b;
        
        // console.log(`return_cnt: ${return_cnt}`)
        // console.log(`bottle: ${bottle}`)
    }
    
    return answer
}