function solution(numbers) {
    var answer = [];
    let sum = [];
    
    for(i=0; i<numbers.length; i++){
        for(j=i; j<numbers.length; j++){
            if(i !== j){
                let num = numbers[i] + numbers[j];
                if(!sum.includes(num)){
                    sum.push(num);
                }
            }
        }
    }
    
    answer = sum.sort((a,b) => a-b)
    return answer;
}