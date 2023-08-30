function solution(numbers) {
    var answer = 0;
    let cnt = numbers.length;
    
    numbers.sort((a,b) => a-b)
    let num1 = numbers[cnt-1] * numbers[cnt-2];
    let num2 = numbers[0] * numbers[1];
    
    if(num1 > num2){
        answer = num1;
    } else {
        answer = num2;
    }
    
    return answer;
}