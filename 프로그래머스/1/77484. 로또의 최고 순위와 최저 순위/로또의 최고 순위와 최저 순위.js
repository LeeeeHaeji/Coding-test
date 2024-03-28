function solution(lottos, win_nums) {
    var answer = [];
    
    let same_cnt = win_nums.filter(v => lottos.includes(v)).length
    let zero_cnt = lottos.filter(v => v === 0).length;

    let best = same_cnt + zero_cnt;
    let lowest = same_cnt;
    
    if(best === 0){
        answer = [6,6];
    } else if(zero_cnt === lottos.length){
        answer = [1,6];
    } else {
        let best_rank = 0;
        let lowest_rank = 0;
        switch(best){
            case 6:
                best_rank = 1;
                break;
            case 5:
                best_rank = 2;
                break;
            case 4:
                best_rank = 3;
                break; 
            case 3:
                best_rank = 4;
                break; 
            case 2:
                best_rank = 5;
                break; 
            default:
                best_rank = 6;
        }
        
        switch(lowest){
            case 6:
                lowest_rank = 1;
                break;
            case 5:
                lowest_rank = 2;
                break;
            case 4:
                lowest_rank = 3;
                break; 
            case 3:
                lowest_rank = 4;
                break; 
            case 2:
                lowest_rank = 5;
                break; 
            default:
                lowest_rank = 6;
        }
        answer = [best_rank, lowest_rank]
    }
    return answer;
}