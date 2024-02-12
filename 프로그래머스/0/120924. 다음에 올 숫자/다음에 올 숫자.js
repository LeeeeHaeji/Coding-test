function solution(common) {
    var answer = 0;
    let difference = 0;
    let ratio = 0;

    if((common[1]-common[0]) === (common[2]-common[1])){
        difference = (common[1]-common[0]);
        answer = common[common.length-1] + difference;
    } else {
        ratio = common[1]/common[0];
        answer = common[common.length-1] * ratio;
    }
    
    return answer;
}