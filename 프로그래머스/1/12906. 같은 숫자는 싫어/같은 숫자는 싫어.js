function solution(arr)
{
    var answer = [];
    let not_continue = [];
    
    // 1. 연속적으로 나타나지 않는 부분의 위치 찾기
    for(i=0; i<arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
            not_continue.push(i);
        }
    }
    
    // 2. not_continue를 이용하여 연속된 부분만 자른 뒤 자른 부분의 첫번째 값을 nums에 추가
    if(not_continue[0] === undefined){
        // not_continue에 값이 없다면
        answer.push(arr[0]);
    } else {
        let nums = [];
        // 2-1. 처음~not_continue[0]+1까지
        nums.push(arr.slice(0, not_continue[0]+1)[0])

        // 2-2. 두번째~
        for(i=0; i<not_continue.length-1; i++){
            nums.push(arr.slice(not_continue[i]+1, not_continue[i+1]+1)[0]);
        }

        // 2-3. 마지막
        nums.push(arr.slice(not_continue[not_continue.length-1]+1)[0])

        answer = nums;
    }
    
    return answer;
}