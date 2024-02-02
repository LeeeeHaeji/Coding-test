function solution(numlist, n) {
    var answer = [];
    let closeNumList = [];
    let closeRank = new Array(numlist.length).fill(1);
    
    // 1. n과의 거리를 계산
    for(i=0; i<numlist.length; i++){
          closeNumList[i] = Math.abs(numlist[i] - n);
    }
    
    // 2. 가까운 순으로 등수 매기기
    for(i=0; i<closeNumList.length; i++){
        for(j=0; j<closeNumList.length; j++){
            if(closeNumList[i] > closeNumList[j]){
                closeRank[i]++;
            }
        }
    }

    // 3. 등수의 위치에 해당 index에 있는 값 넣기
    closeNumList.fill(0);

    for(i=0; i<closeRank.length; i++){
        if(closeNumList[closeRank[i]]){
            // 이미 그 index에 값이 있을 경우(등수가 같을 경우)
            if(closeNumList[closeRank[i]] < numlist[i]){
                // 기존에 있던 값과 비교후 새로 들어올 값이 작다면
                let data = closeNumList[closeRank[i]];
                closeNumList[closeRank[i]] = numlist[i];
                closeNumList[closeRank[i]+1] = data;
            } else {
                // 기존에 있던 값이 작다면
                closeNumList[closeRank[i]+1] = numlist[i];
            }
        } else {
            closeNumList[closeRank[i]] = numlist[i];
        }
    }
    closeNumList.shift()
    answer = closeNumList;
    return answer;
}