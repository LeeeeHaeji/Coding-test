function solution(answers) {
    var answer = [];
    let people = ['12345','21232425','3311224455'];
    let result = [];
    
    for(i=0; i<people.length; i++){
        while(answers.length > people[i].length){
            people[i] = people[i].repeat(2);
        }    
        people[i] = people[i].split('')
    }

    for(i=0; i<people.length; i++){
        let cnt = 0;
        for(j=0; j<answers.length; j++){
            if(answers[j] == people[i][j]){
                cnt++;
            }    
        }
        result.push(cnt)
    }
    
    const max = Math.max(...result)
    
    for(i=0; i<result.length; i++){
        if(max === result[i]){
            answer.push(i+1)
        }
    }
    
    return answer;
}