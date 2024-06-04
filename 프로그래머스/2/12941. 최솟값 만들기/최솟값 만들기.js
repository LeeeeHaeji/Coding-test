function solution(A,B){
    var answer = 0;
    let cal = 0;
    
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a)

    for(i=0; i<A.length; i++){
        cal = A[i] * B[i];
        answer += cal;
    }

    return answer;
}