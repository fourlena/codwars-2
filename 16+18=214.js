function add(num1, num2) {
    let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');
  if(arr1.length > arr2.length){
    arr2.unshift('0')
    let sum = arr1.map((item,index) => +item + +arr2[index]);
    return +sum.join('');
  }
else if(arr1.length < arr2.length){
    arr1.unshift('0');
    let sum = arr1.map((item,index) => +item + +arr2[index]);
    return +sum.join('');
  } else{
    let sum = arr1.map((item,index) => +item + +arr2[index]);
    return +sum.join('');
  }
}