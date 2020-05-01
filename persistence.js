
persistence(4)

function persistence(num){
    var result, counter = 0,
    sNumber = num.toString()
    
    while(sNumber.length != 1){
        result = sNumber[0]
        for(var i = 1; i<sNumber.length; i ++)
        {
            result =  result * sNumber[i] 
        }
        counter++;
        sNumber = result.toString()
    }
    return counter
}   



function persistence1(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }


 const persistence2 = num => {
    return `${num}`.length > 1 
      ? 1 + persistence2(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }


  function persistence3(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 }