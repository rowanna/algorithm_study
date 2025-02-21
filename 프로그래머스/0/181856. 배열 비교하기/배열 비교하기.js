function solution(arr1, arr2) {
    let answer = arr1.length > arr2.length ? 1 : -1;
    if(arr1.length === arr2.length) {
        const arr1Plus = arr1.reduce((acc, cur) => acc + cur)
        const arr2Plus = arr2.reduce((acc, cur) => acc + cur)
        if(arr1Plus > arr2Plus) {
            answer = 1
        } else if(arr1Plus < arr2Plus){
            answer = -1
        }else if(arr1Plus === arr2Plus) {
            answer = 0
        }
    }
    return answer;
}