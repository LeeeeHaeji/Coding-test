function solution(array) {
    var answer = 0;
    let num = [];
    
    if(array.length === 1){
        answer = array[0];
    } else {
        //0으로 초기화
        for (let i = 0; i < Math.max(...array) ; ++i) {
            num[i] = 0;
        }

        //num의 index위치가 array에 있는 원소의 값
        //원소의 개수는 해당 index의 값
        //ex. array = [1,1,2] -> num = [0,2,1] : 1이 2개, 2가 1개이므로 num의 index 1번위치의 값이 2, 2번위치의 값이 1
        for(i=0; i<array.length; i++){
            if(!!num[array[i]]){
                num[array[i]]++;
            } else {
                num[array[i]] = 1;
            }
        }
        console.log(`array: ${array}`)
        console.log(`num: ${num}`)

        //최대로 반복된 횟수
        let max = Math.max(...num);

        //최빈값이 중복인지 확인
        let count = num.filter(v => max === v).length;
        console.log(`최빈값의 개수: ${count}`)

        if(count === 1){
            answer = num.indexOf(max);
        } else {
            //최빈값이 중복이라면
            answer = -1;
        }

        console.log(`max : ${max}`)
    }
    
    return answer;
}