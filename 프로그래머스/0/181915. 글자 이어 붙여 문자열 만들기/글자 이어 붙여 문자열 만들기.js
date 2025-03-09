function solution(my_string, index_list) {
    return index_list.map((value) => my_string[value]).join('');
}