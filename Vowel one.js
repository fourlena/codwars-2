function vowelOne(s){
    let arr = s.toLowerCase().split('');
    let vowels = ['a','u','e','o','i'];
    for(let i = 0; i < arr.length; i++){
      if(vowels.includes(arr[i])){
        arr[i] = '1'
      }else{
        arr[i] = '0'
      }
    }
    return arr.join('')
  }