function solution(arr1, arr2) {
    var answer = [];
    for(i=0; i<arr1.length; i++){
        let arr3 = []
        for(j=0; j<arr1[i].length; j++){
            arr3.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(arr3)
    }
    
    return answer;
}