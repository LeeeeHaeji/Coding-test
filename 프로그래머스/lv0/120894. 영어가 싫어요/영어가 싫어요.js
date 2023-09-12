function solution(numbers) {
    var answer = 0;
    let num_arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let cnt = 0;
    while(cnt < numbers.length){
        for(i=0; i<num_arr.length; i++){
            let idx = 0;
            if(numbers.indexOf(num_arr[i]) >= 0){
                idx = numbers.indexOf(num_arr[i]);

                numbers = numbers.split('')
                numbers.splice(idx, num_arr[i].length, i)
                numbers = numbers.join('')
            }
        }
        cnt++;
    }

    answer = parseInt(numbers);
    
    return answer;
}