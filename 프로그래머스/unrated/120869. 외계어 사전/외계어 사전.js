function solution(spell, dic) {
    var answer = 0;
    let cnt = 0;
    let result = 0;
    
    for(i=0; i<dic.length; i++){
        let cnt = 0;
        for(j=0; j<spell.length; j++){
            if(dic[i].includes(spell[j])){
                cnt++;            
            }
        }
        if(spell.length === cnt){
            result++;
        }
    }
    
    if(result>0){
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}