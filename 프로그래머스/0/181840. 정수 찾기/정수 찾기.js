function solution(num_list, n) {
    return !!num_list.find(el => el === n) ? 1 : 0;
}