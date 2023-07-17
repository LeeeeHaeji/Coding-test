function solution(n) {
    var answer = [];
    
    n = n + '';
    n = n.split('');
    for(i=0; i<n.length; i++){
        n[i] = Number(n[i]);
    }
    console.log(n); // [ 1, 2, 3, 4, 5 ]
    
    for(i=0; i<n.length; i++){
        answer[i] = n[n.length-i-1]; // n[4~0]
    }
    
    console.log(answer);
    return answer;
}