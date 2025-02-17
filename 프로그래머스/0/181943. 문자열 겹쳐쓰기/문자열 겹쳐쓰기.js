function solution(my_string, overwrite_string, s) {
    let answer = '';
    const newString = [...my_string]
    const newOverwriteString = [...overwrite_string]
    for(let i = s; i <= s + overwrite_string.length; i++ ){
        
        if(i === s + overwrite_string.length || !newString[i]) {
            
        }else {

            newString[i] = newOverwriteString[i-s]
        }
    }
    answer = newString.join('')
    return answer;
}