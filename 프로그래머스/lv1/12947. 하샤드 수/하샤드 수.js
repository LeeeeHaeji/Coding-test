function solution(x) {
    var answer = true;
    var sum = 0;
    
    x = x + '';
    x = x.split('');
    
    for(i=0; i<x.length; i++){
        x[i] = Number(x[i]);
    }
    
    for(i=0; i<x.length; i++){
        sum += x[i];
    }
    console.log("sum: " + sum);
    
    // 정수 변환
    x = x.join('');
    x = Number(x);
    
    // 하샤드 수 검사
    if(x%sum == 0){
        answer = true;
    }
    else {
        answer = false;
    }
    
    return answer;
}