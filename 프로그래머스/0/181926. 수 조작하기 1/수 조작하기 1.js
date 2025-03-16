function solution(n, control) {
    let answer = n;
    [...control].forEach((v) => {
        switch(v){
        case 'w' : answer +=1
            break;
        case 's' : answer -=1
            break;
        case 'd' : answer +=10
            break;
        case 'a' : answer -=10
            break;
    }
    })
    
    return answer;
}