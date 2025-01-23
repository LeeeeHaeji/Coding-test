function solution(cards1, cards2, goal) {
    let stack = [];
    
    for(i=goal.length-1; i>=0; i--){
        stack.push(goal[i]);
    }

    while(stack.length > 0){
        if((cards1.length > 0) && (cards2.length > 0)){
            if(stack[stack.length-1] === cards1[0]){
                stack.pop();
                cards1.shift();
            } else if(stack[stack.length-1] === cards2[0]){
                stack.pop();
                cards2.shift();
            }   
        } else if(cards1.length === 0){
            if(stack[stack.length-1] !== cards2[0]){
                return "No";
            } else {
                for(i=0; i<cards2.length; i++){
                    if(stack[stack.length-1] === cards2[0]){
                        stack.pop();
                        cards2.shift();
                    }
                }
            }
        } else if(cards2.length === 0){
            if(stack[stack.length-1] !== cards1[0]){
                return "No";
            }else {
                for(i=0; i<cards1.length; i++){
                    if(stack[stack.length-1] === cards1[0]){
                        stack.pop();
                        cards1.shift();
                    }
                }
            }
        }
    }

    return "Yes";
    
    /*
    let cards1_index = [],
        cards2_index = [];
    
    let cnt1 = 0,
        cnt2 = 0;
    
    for(i=0; i<goal.length; i++){
        for(k=0; k<cards1.length; k++) {
             if(goal[i] === cards1[k]) {
                 cards1_index[cnt1] = k;
                 cnt1++;
             } 
        }
        for(j=0; j<cards2.length; j++) {
            if(goal[i] === cards2[j]) {
                cards2_index[cnt2] = j;
                cnt2++;
             }
        }
    }
    console.log(`cards1_index : ${cards1_index}`);
    console.log(`cards2_index : ${cards2_index}`);
    
    for(i=0; i<cards1_index.length; i++) {
        if(cards1_index[i] !== i){
            return "No"
        }
    }
    
    for(i=0; i<cards2_index.length; i++) {
        if(cards2_index[i] !== i){
            return "No"
        }
    }
    
    return "Yes";
    */
}