function combine(inputs){
    let argsArray = [...arguments];
    let comboObj = {};
    for(let i = 0; i < arguments.length; i++){
      for(let key in arguments[i]){
        if(!comboObj[key]){
        comboObj[key] = arguments[i][key];
        }
        else {
          comboObj[key] += arguments[i][key];
        }
      }
    }
  return comboObj;
  }