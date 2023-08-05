function solution(arr, divisor) {
    var answer = [];
    var list = [];
    var num = 0;
    var data = 0;
    
    for(i=0; i<arr.length; i++){
        if(arr[i]%divisor === 0){
            list[num] = arr[i];
            num++;
        }
    }
    
    for(i=0; i<list.length; i++){
        data = list[i];
        for(j=i+1; j<list.length; j++){
            if(data > list[j]){
                data = list[j];
                list[j] = list[i];
                list[i] = data;
            }
        }
    }
    
    if(list.length === 0){
        list.push(-1);
    }
    
    console.log(list);
    answer = list;
    return answer;
}