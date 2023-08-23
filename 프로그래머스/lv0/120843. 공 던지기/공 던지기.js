function solution(numbers, k) {
    var answer = 0;
    let arr = [];
    let last_index = 0;
    
    last_index = 2*k - 2;

    while(numbers.length < last_index){
        for(j=0; j < numbers.length; j++){
            arr.push(numbers[j]);
        }
        numbers.push(...arr);
    }
    
    console.log(numbers)
    answer = numbers[last_index];
    
    return answer;
}