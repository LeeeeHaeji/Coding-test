function solution(before, after) {
    var answer = 0;

    for(i=0; i<before.length; i++){
        if(after.includes(before[i])){
                after = after.replace(before[i], '')
        }
    }

    !!after ? answer = 0 : answer = 1;
    return answer;
}