const intToRoman = (num) => {
    const number = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    
    let result = '';
    
    for (key in number) {
        //how many certain symbols are needed to repeat  
        const repeatCounter = Math.floor(num / number[key]);
      
        if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);
      }
      
    //change the num
        num %= number[key];
      
        if (num === 0) return result;
    }
    
    return result;
  };