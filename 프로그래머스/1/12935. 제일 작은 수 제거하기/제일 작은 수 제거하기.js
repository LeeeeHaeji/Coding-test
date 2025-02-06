function solution(arr) {
    var answer = [];
    /*
    var min = 0;
    var pos = 0;
    min = arr[0];
    
    if(arr.length == 1){
        answer = [-1];
    } else {
        for(i=1; i<arr.length; i++){
            if(min > arr[i]){
                min = arr[i];
            }
        }
        pos = arr.indexOf(min);

        arr.splice(pos,1);
        answer = arr;
    }
    */
    
    
    if(arr.length === 1){
        return [-1]
    }else {
        let min = Math.min(...arr);
        let pos = arr.indexOf(min);
    
        // console.log(min)
        // console.log(arr.indexOf(min))
        
        arr.splice(pos,1)
        return arr;
    }

}