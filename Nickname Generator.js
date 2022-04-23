function nicknameGenerator(name){
    let arr = ['i','a','u','e','o'];
     let newArr = name.split('');
     if(name.length < 4){
       return 'Error: Name too short'
     }else if(arr.indexOf(name[2]) != -1){
       return name.slice(0,4);
     }else{
       return name.slice(0,3);
     }
   }