function solution(quiz) {
    var answer = [];
    
    for(i=0; i<quiz.length; i++){
        let arr = [];
        let num = [];
        let cal = [];
        
        arr = quiz[i].split(' ');
        
        for(j=0; j<arr.length; j++){
            if(!isNaN(parseInt(arr[j]))){
                num.push(parseInt(arr[j]))
            } else {
                cal.push(arr[j])
            }
        }

        let result = 0;
        if(cal[0] === "+"){
            result = num[0] + num[1];
            if(num[2] === result){
                answer.push("O");
            } else {
                answer.push("X");
            }
        } else {
            result = num[0] - num[1];
            if(num[2] === result){
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
    }
    
    return answer;
}