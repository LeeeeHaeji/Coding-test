function solution(cards1, cards2, goal) {
    var answer = '';
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
}