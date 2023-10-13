function solution(keyinput, board) {
    var answer = [];
    let move = [0, 0];
    let width = (board[0] - 1) / 2;
    let height = (board[1] - 1) / 2;
    
    for(i=0; i<keyinput.length; i++){
        if(move[0] > width) {
            move[0] = width;
        } else if(move[0] < -width){
            move[0] = -width;
        }

        if(move[1] > height){
            move[1] = height;
        } else if(move[1] < -height){
            move[1] = -height
        }
        
        if(keyinput[i] === "left"){
            move[0] = move[0] - 1;
        } else if(keyinput[i] === "right"){
            move[0] = move[0] + 1;
        } else if(keyinput[i] === "up") {
            move[1] = move[1] + 1;
        } else {
            move[1] = move[1] - 1;
        }
    }

    if(move[0] > width) {
        move[0] = width;
    } else if(move[0] < -width){
        move[0] = -width;
    }
    
    if(move[1] > height){
        move[1] = height;
    } else if(move[1] < -height){
        move[1] = -height
    }
    
    answer = move;
    return answer;
}