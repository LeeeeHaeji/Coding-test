function solution(s){
    let stack = 0;
    const cnt = s.length;
    
    s = s.split('');

    for(i of s){
        if(i === '('){
            stack++;
        } else {
            stack--;
        } 
        if (stack < 0) {
            return false;
        }
    }

    if(stack !== 0){
        return false;
    }

    return true;
}