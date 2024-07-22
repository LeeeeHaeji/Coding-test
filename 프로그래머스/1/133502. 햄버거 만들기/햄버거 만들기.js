function solution(ingredient) {
    var answer = 0;
    let stack = [];

    for(i=0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        // console.log('stack:' + stack)
        if((stack[stack.length-1] === 1) && (stack[stack.length-2] === 3)){
            if((stack[stack.length-3] === 2) && (stack[stack.length-4] === 1)){
                for(j=0; j<4; j++){
                    stack.pop();
                }
                answer++;
            }
        }
    }
    return answer;
}