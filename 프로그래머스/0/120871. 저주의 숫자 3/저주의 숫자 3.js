function solution(n) {
    var answer = 0;

    for(i=1; i<=n; i++){
        if( i%3 === 0 || (/3/g).test(i.toString())){
            n++;
        }
    }
    answer = n;
    return answer;
}