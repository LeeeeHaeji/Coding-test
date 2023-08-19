function solution(numbers, direction) {
    var answer = [];
    let arr = [];

    if(direction === "right"){
        console.log("right")
        for(i=0; i<numbers.length -1; i++){
            arr[i+1] = numbers[i];
        }
        arr[0] = numbers[numbers.length -1]

    } else {
        console.log("left")
        for(i=0; i<numbers.length -1; i++){
            arr[i] = numbers[i+1];
        }
        arr.push(numbers[0]);
    }

    answer = arr
    return answer;
}