function solution(babbling) {
    var answer = 0;
    const word = [ "aya", "ye", "woo", "ma"];
    
    for(i=0; i<babbling.length; i++){
        for(j=0; j<4; j++){
            if(babbling[i].includes(word[j])){
                babbling[i] = babbling[i].replaceAll(word[j], " ");
            }
        }
        babbling[i] = babbling[i].replaceAll(" ", "")
    }
    
    answer = babbling.filter((v) => !v).length;
    return answer;
}