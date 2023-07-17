function solution(s){
    var answer = true;
    var cnt_p = 0;
    var cnt_y = 0;

    const text_p = "p";
    const text_P = "P";
    const text_y = "y";
    const text_Y = "Y";
    
    var pos_p = s.indexOf(text_p, 0);
    var pos_P = s.indexOf(text_P, 0);
    var pos_y = s.indexOf(text_y, 0);
    var pos_Y = s.indexOf(text_Y, 0);
    
    while(pos_p != -1){
        cnt_p++;
        pos_p = (s.indexOf(text_p, pos_p+1));
    }
    while(pos_P != -1){
        cnt_p++;
        pos_P = (s.indexOf(text_P, pos_P+1));
    }
    
    while(pos_y != -1){
        cnt_y++;
        pos_y = (s.indexOf(text_y, pos_y+1));
    }
    while(pos_Y != -1){
        cnt_y++;
        pos_Y = (s.indexOf(text_Y, pos_Y+1));
    }
    
    
    console.log(cnt_p, cnt_y);
    
    if(cnt_p == cnt_y){
        answer = true;
    }
    else {
        answer = false;
    }
    
    return answer;
}