function solution(array) {
    var answer = 0;
    let middle = 0;
    
    //오름차순 정렬
    array = array.sort((a,b) => a-b);
    
    //중앙값 index찾기
    middle = (array.length + 1)/2 - 1;
    
    //중앙값 return
    answer = array[middle];
    
    return answer;
}