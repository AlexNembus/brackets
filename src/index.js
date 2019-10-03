 module.exports = function check(str, bracketsConfig) {
  let tempArray = [];
  let splitStr = str.split('');
  
  if (splitStr.length % 2 === 1){
     return false;
  }

  for ( let z = 0 ; z < splitStr.length ; z++ ){
        let parenthesis = splitStr[z];
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (parenthesis === bracketsConfig[i][0]) {
                let param = tempArray.pop();
                if(param === undefined) {
                    tempArray.push(parenthesis)
                } else if(bracketsConfig[i][0] ===bracketsConfig[i][1]) {
                    if(param !== parenthesis) {                        
                        tempArray.push(param);
                        tempArray.push(parenthesis);
                    }   
                } else {                        
                    tempArray.push(param);
                    tempArray.push(parenthesis);
                }                    
                    
            } else if (parenthesis === bracketsConfig[i][1]) {
                param = tempArray.pop();
                if (bracketsConfig[i][0] === param && bracketsConfig[i][1] === parenthesis) { } 
                else { return false; }
            }
        }
    }
   if (tempArray.length !== 0) { return false; }    

   return true;
} 
