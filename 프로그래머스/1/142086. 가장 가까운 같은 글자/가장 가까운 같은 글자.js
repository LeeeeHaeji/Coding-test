function solution(s) {
    var answer = [];

    for(i=0; i<s.length; i++){
        let idx = 0;
        let array = [];
        
        while(s.indexOf(s[i],idx) !== i){
            idx++;
            array.push(s.indexOf(s[i],idx))
        }

        if(array.length === 1){
            answer.push(array[0]);
        } else if(array.length > 0)  {
            let cal = array[array.length-1] - array[array.length-2]
            answer.push(cal);
        } else {
            answer.push(-1);
        }
    }

    return answer;
}