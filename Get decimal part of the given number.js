function getDecimal(n){
    if(typeof(n) == 'number'){
      let num = Math.abs(n);
      let int = Math.trunc(num);
      if(int > 0){
        let res = num - int;
        return +res.toFixed(7);
      }else{
        let res = int + num;
        return +res.toFixed(2);
      }
    }
  }