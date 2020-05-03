array1 = ['i','j','k','l','n','o'];
findMissingLetter(array1);


function findMissingLetter(array)
{
    var currentChar = array[0].charCodeAt(0);

    for(var i = 0; i<array.length; i++){
        
        if(array[i].charCodeAt(0) != currentChar)
        {
            break;
        }
        currentChar++;
    }

    return String.fromCharCode(currentChar);
}