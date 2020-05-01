getMiddle("test")


function getMiddle(s){
    var result

    if(s.length%2 == 0){
        result = s.charAt(Math.ceil(s.length/2)-1)+
        s.charAt(Math.ceil(s.length/2))
    } else {
        result = s.charAt(Math.floor(s.length/2))
    }
    console.log(result)

    return result
}


function getMiddle1(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}



function getMiddle2(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}