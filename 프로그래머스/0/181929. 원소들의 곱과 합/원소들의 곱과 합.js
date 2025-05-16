function solution(num_list) {
    const multiply = num_list.reduce((acc,cur) => acc * cur)
    const sum = num_list.reduce((acc,cur) => acc + cur)
    return multiply < sum * sum ? 1 : 0;
}