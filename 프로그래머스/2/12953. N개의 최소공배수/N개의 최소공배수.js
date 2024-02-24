function solution(arr) {
    var answer = 0;
    let divide_nums = [];
    let cnt = 2;
    let is_divide = false;
    
    while(cnt <= Math.max(...arr)){
        for(i=0; i<arr.length; i++){
            for(j=i+1; j<arr.length; j++){
                if((arr[i]%cnt === 0) && (arr[j]%cnt === 0)){
                    is_divide = true;
                }
            }
        }
        
        if(is_divide){
            for(i=0; i<arr.length; i++){
                if(arr[i]%cnt === 0){
                    arr[i] = arr[i]/cnt;
                }
            }
            divide_nums.push(cnt);
            is_divide = false;
        } else {
            cnt++;
        }
    }

    if(divide_nums[0] === undefined){
        answer = arr.reduce((acc, cur) => {
            return acc * cur
        })
    } else {
        answer = (arr.reduce((acc, cur) => {
            return acc * cur
        })) * (divide_nums.reduce((acc, cur) => {
            return acc * cur}))
    }
    
    return answer;
}