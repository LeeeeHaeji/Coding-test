function solution(n) {
    var answer = [];
    let arr = [];
    let cnt = 2;
    
    while(cnt <= n) {
        if(n%cnt === 0){
            arr.push(cnt);
            n = n/cnt;
        } else {
            cnt++;
        }
    }
    console.log(arr)
    cnt = 0;
    while(cnt < 3){
        for(i=0; i<arr.length; i++){
            for(j=i+1; j<arr.length; j++){
                if(arr[i] === arr[j]){
                    arr.splice(j,1)
                }
            }
        }
        cnt++;
    }
    

    answer = arr.sort((a,b) => a - b)

    return answer;
}