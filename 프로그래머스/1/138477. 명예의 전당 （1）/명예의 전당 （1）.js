function solution(k, score) {
    var answer = [];
    let topList = [];
    let showScore = new Array(score.length).fill(0);
    let cnt = 0;

    while(cnt <= score.length){

        if(topList.length < k){
            topList.push(score[cnt]);
            topList.sort((a,b) => b-a);
            showScore[cnt] = topList[topList.length-1];
            
            cnt++;
        } else{
            if(topList[k-1] < score[cnt]){
                topList[k-1] = score[cnt];
                topList.sort((a,b) => b-a);
                showScore[cnt] = topList[k-1];
            }else {
                showScore[cnt] = topList[k-1];
            }
            cnt++;
        }
        
    }

    showScore.pop();
    
    return answer = showScore;
}