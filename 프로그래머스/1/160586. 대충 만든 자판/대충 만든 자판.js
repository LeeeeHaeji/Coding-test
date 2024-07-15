function solution(keymap, targets) {
    var answer = new Array(targets.length).fill(0);

    for(i=0; i<targets.length; i++){
        for(j=0; j<targets[i].length; j++){
            let list = []
            
            for(k=0; k<keymap.length; k++){
                if(keymap[k].includes(targets[i][j])){
                    list.push(keymap[k].indexOf(targets[i][j]))
                }
            }
            
            if(list.length < 1){
                answer[i] = -1;
                break;
            } else if(list.length === 1){
                answer[i] += list[0]+1;
            } else {
                answer[i] += Math.min(...list) + 1;
            }
        }
    }
    
    return answer;
}