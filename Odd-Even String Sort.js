function sortMyString(S) {
    let arr = S.split('');
    let arrEven = [];
    let arrOdd = [];
    for(let i = 0; i < arr.length; i++){
      if(i == 0 || i % 2 == 0){
        arrEven.push(arr[i])
      }else{
        arrOdd.push(arr[i])
      }
    }
    let strEven = arrEven.join('');
    let strOdd = arrOdd.join('');
   return `${strEven} ${strOdd}`
}