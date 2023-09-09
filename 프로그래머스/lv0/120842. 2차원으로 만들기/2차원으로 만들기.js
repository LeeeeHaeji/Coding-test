function solution(num_list, n) {
    var answer = [[]];
    let arr = [];
    
    for(i=0; i<num_list.length; i+=n){
        let slice_arr = [];
        for(j=i; j<i+n; j++){
            slice_arr.push(num_list[j])
        }
        
        arr.push([...slice_arr]);
    }
    
    answer = arr;
    return answer;
}