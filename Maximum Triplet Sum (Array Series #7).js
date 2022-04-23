function maxTriSum(numbers){
    let set = [...new Set(numbers)].sort((a,b) => a - b );
    let arr = set.slice(set.length - 3).reduce((sum,current)=> sum += current );
     return arr
   }