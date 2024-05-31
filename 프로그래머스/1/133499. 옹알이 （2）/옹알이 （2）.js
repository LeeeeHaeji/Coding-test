function solution(babbling) {
    var answer = 0;
    const str = ["aya", "ye", "woo", "ma"];

    let test = [];
    for(i=0; i<babbling.length; i++){
        test = babbling[i].match(/((?:aya|ye|woo|ma)|.+?)/g);

        for(k=0; k<test.length; k++){
            if(test[k] !== test[k+1]){
                if(str.includes(test[k])){
                    babbling[i] = babbling[i].replace(test[k], '')
                }
            }
        }
    }

    return answer = babbling.filter(v => v === '').length;
}