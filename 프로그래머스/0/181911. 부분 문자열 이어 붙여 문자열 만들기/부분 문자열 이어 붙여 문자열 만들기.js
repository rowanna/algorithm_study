function solution(my_strings, parts) {
    const answer = my_strings.map((value, idx) => value.slice(parts[idx][0], parts[idx][1]+1));
    return answer.join('');
}