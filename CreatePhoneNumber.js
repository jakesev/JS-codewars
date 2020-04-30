start()

function start(){
    createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
}


function createPhoneNumber(numbers){
    var result = ''
    let numberCode  =['(',')','-']



    for(var loop in numbers){
        if      (loop ==0)  result+=numberCode[0] 
        else if (loop == 3) result+=numberCode[1]+" "
        else if (loop == 6) result+=numberCode[2]

        result+=numbers[loop]
    }
    console.log(result)
    return result
}



function createPhoneNumber1(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') '+ numbers.substring(3, 6)+ '-'+ numbers.substring(6);
  }


  function createPhoneNumber2(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }