function solution(n) {
    var answer = 0;
    let num_array = new Array(n);
    
    //에라토스테네스의 체
    for(i=2;i<=n;i++) {
        num_array[i] = i;
    }
    
    for(i=2; i<=n; i++){
        // 이미 지워진 숫자가 아니라면, 그 배수부터 출발하여, 가능한 모든 숫자 지우기
        if(num_array[i] !== 0){
            for(j=2*i; j<=n; j+=i){
                num_array[j] = 0;
            }
        }
    }

    return answer = num_array.filter(v => v !== 0).length;
}