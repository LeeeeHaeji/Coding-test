function solution(number, limit, power) {
    /*
    var answer = 1;
    let cnt = 0;
    
    for(i=2; i<=number; i++){
        cnt = 0;
        for(j=1; j<=Math.sqrt(i); j++){
            if(i%j === 0){
                if(i/j === j){
                    cnt += 1;
                } else{
                    cnt+=2;
                }
 
            }
        }

        if(cnt > limit){
            answer += power;
        }else {
            answer += cnt;
        }
    }
    */
    let list = new Array(number).fill(1); //약수의 개수 리스트
    let sum = 0;
    
    // 약수의 개수 구하기
    for(i=1; i<=number; i++){
        // console.log(`i: ${i}`)
        for(j=1; j<=i/2; j++){
            // console.log(`j: ${j}`)
            if(i%j === 0){
                list[i-1]++;
            }
            // console.log('-------------------')
        }
    }

    //리스트의 값들이 공격력 제한 수치를 넘는지 확인
    list.forEach(v => {
        if(v > limit){
            sum += power
        } else {
            sum += v
        }
    })

    return sum;
}