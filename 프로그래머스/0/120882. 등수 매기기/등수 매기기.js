function solution(score) {
    var answer = [];
    // 1. 평균 계산
    let avg = [];
    
    for(i=0; i<score.length; i++){
        avg[i] = (score[i][0] + score[i][1]) / 2;
    }
    
    // 2. 등수 계산
    let rank = new Array(avg.length).fill(1);
    
    for(i=0; i<avg.length; i++){
        for(j=0; j<avg.length; j++){
            if(avg[i] < avg[j]){
                rank[i]++;
            }
        }
    }
    
    answer = rank;
    return answer;
}