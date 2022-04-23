function killer(suspectInfo, dead) {
    let entr = Object.entries(suspectInfo);
    let val = Object.values(suspectInfo);
    for(let i = 0; i < val.length; i++){
      for(let j = 0; j < val[i].length; j++){
        if(dead.includes(val[i][j])){
          return entr[i][0];
        }
      }
    }
  }