
/**
   Complete the solution so that it splits the string into 
   pairs of two characters. If the string contains an odd 
   number of characters then it should replace the missing 
   second character of the final pair with an underscore ('_').
 */

console.log(solution('acbdefg'))


function solution(str){
var a = [];
var i = 2;

if(str.length %2 != 0){str+='_';}

if(str.lenght>1){
    do{ a.push(str.substring(0, i));} 
    while((str = str.substring(i, str.length)) != "");
}
    return a;
}



function solution1(str){
    return (str + "_").match(/../g);
 }

 function solution2(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
  }