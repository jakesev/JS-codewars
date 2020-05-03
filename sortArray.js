sortArray([5, 3, 2, 8, 1, 4])

function sortArray(array){
    

   var result =  quickSort(array)
    
    
}

function quickSort(array, left, right){
    var index;
    if (array.length > 1){
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? array.length - 1: right;

        index = partition (array, left, right);
        console.log(left+" " + index) 
        if(left < index - 1){
                quickSort(array, left, index -1)
        }
        console.log(index+" " + right) 

        if(index < right ){
            quickSort(array,index, right)
        }
    }

    return array;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function partition(array,  left, right){
    var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;

   //while i <= j continue the loop
    while(i<=j){

        while(array[i] < pivot){
            i++;
        }
        
        while(array[j] > pivot){
            j--;
        }

        // Swap position of i and j if i<=j
        if(i<=j){
            swap(array,i,j);
            i++;
            j--;
        }
        console.log("Making it here")
    }
    return i;
}