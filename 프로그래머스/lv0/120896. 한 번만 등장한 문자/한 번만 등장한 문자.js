function solution(s) {
    var answer = '';
    let arr = []
    
    s = s.split('')
    for(i=0; i<s.length; i++){
        let cnt = 0;  
        for(j=0; j<s.length; j++){
            if(s[i] === s[j]){
                cnt++
            }
        }
        console.log(cnt)
        if(cnt === 1){
            arr.push(s[i])
        }
    }
    
    arr.sort()
    answer = arr.join('')

    return answer;
}