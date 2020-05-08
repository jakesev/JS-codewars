
/**
Given two arrays a and b write a function 
comp(a, b) (compSame(a, b) in Clojure) 
that checks whether the two arrays have the 
"same" elements, with the same multiplicities. 
"Same" means, here, that the elements in b are 
the elements in a squared, regardless of the order.
*/


a1 = [81, 61, 69, 88, 51, 56, 60] ;
a2 = [6561, 3721, 4761, 7745, 2601, 3136, 3600];


console.log(comp(a1,a2))

function comp(array1,array2){
for(var i = 0; i<array2.length; i++){
    for(var j = 0; j<array1.length; j++){
        if(array1[j] == Math.sqrt(array2[i]))
        {
            return true;
        }
    }
}
return false;    
}


