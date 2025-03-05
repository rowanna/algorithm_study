function solution(start_num, end_num) {
    const answer = [];
    const loopNumber = start_num-end_num
    for(let i = 0; i <= loopNumber;i++) {

        answer.push(start_num)
        start_num -=1
    }
    return answer;
}