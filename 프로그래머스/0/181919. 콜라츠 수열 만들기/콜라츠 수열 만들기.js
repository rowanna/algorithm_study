function solution(n) {
    var answer = [];
    let number = n;

    while (number > 1) {
        answer.push(number);
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
    }

    answer.push(1); // 마지막으로 1을 추가
    return answer;
}