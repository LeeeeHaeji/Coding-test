function solution(id_pw, db) {
    var answer = '';
    let id_data = [];
    let pw_data = [];
    
    for(i=0; i<db.length; i++){
            if(id_pw[0] === db[i][0]){
                id_data.push(i);
            }
        
            if(id_pw[1] === db[i][1]){
                pw_data.push(i);
            }
    }

    if(id_data[0] >= 0 && pw_data[0] >= 0){
        // id와 비밀번호 모두 일치하는 값이 있을때
        let fit_idpw = false;
        for(i=0; i<id_data.length; i++){
            if(pw_data.includes(id_data[i])){
                fit_idpw = true;
            }
        }
        
        if(fit_idpw){
            answer = 'login';
        } else {
            answer = 'wrong pw';
        }
    } else if(id_data[0] >= 0){
        answer = 'wrong pw';
    } else if(pw_data[0] >= 0){
        answer = 'fail';
    }

    return answer;
}