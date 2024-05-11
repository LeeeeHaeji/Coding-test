function solution(name, yearning, photo) {
    var answer = [];
    let name_obj = {};
    
    for(i=0; i<name.length; i++){
        name_obj[name[i]] = yearning[i];
    }

    for(i=0; i<photo.length; i++){
        let sum = 0;
        for(j=0; j<photo[i].length; j++){
            if(!!name_obj[photo[i][j]]){
                sum += name_obj[photo[i][j]]
            }
        }
        answer.push(sum)
    }
    
    return answer;
}