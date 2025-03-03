function solution(num_list) {
    let answer = 0;
    let answer2 = 0
    num_list.forEach((v,i) => {
        if(i % 2 === 0) {  
            answer += v
        } else {
            answer2 += v
        }
        
        
    })
    return answer > answer2 ? answer : answer2;
}