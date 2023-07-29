function solution(numbers) {
    var answer = -1;
    var list = [];
    var sum = 0;
    
    for(i=0; i<10; i++){
        if (numbers.includes(i) == false){
            list.push(i);
        }
    }
    
    for(i=0; i<list.length; i++){
        sum += list[i];
    }

    answer = sum;
    
    return answer;
}