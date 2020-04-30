


disemvowel("This is a website for losers LOL!")

function disemvowel(str){
    vowels = /(a)|(e)|(i)|(o)|(u)/
    var result =""

    for(var i = 0; i<str.length;i++){
        if(!str[i].toLowerCase().match(vowels))
        {
           result += str[i]
        }
    }

    return result
}



function disemvowel1(str) {
    return str.replace(/[aeiou]/gi, '');
  }