function solution(num_list) {
    const answer = [];
    const last = num_list[num_list.length - 1]
    const lastSecond = num_list[num_list.length - 2]
    const resultValue = last > lastSecond ? last - lastSecond : last * 2    
    
    return [...num_list, resultValue];
}