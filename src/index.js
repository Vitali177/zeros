module.exports = function zeros(str) {

  var kol = 0;

  var kolTwo = 0;
  var kolFive = 0;
  var kolTen = 0;

  var number; 
  var strNumber = '';
  var numberResult = 1;

  for (var i = 0; i < str.length; i++) {

    if (str[i + 1] !== '!' && str[i+1] !== '*' && str[i + 2] !== '!' && str[i + 2] !== '*') {
      strNumber = str[i] + str[i + 1] + str[i + 2];
      i += 2;
    }  else if (str[i + 1] !== '!' && str[i+1] !== '*')  {
      strNumber = str[i] + str[i+1];
      i++;
    }      
    else strNumber = str[i];

    number = strNumber * 1; // 
    strNumber = '';

    if (str[i+1] === '!' && str[i+2] === '!') { // двойной факториал

      i += 3;

      for (var j = number; j > 1; j-=2) {

        if ( j % 100 ===0) {
          
          kolTen += 2;
          continue;
        }

        if ( j % 75 ===0) {
          kolFive++;
          kolTen++;
          continue;
        }

        if ( j % 50 ===0) {
          kolFive++;
          kolTen++;
          continue;
        }

        if ( j % 25 ===0) {
          kolFive++;
          kolTen++;
          continue;
        }

        if (j % 10 === 0) {     
          
          kolTen++;     
          continue;          
        }

        if (j % 5 === 0) {     
          
          kolFive++;     
          continue;          
        }

        if (j % 2 === 0) {     
          
          kolTwo++;     
          continue;          
        }
          
      }  

    }else { // Простой факториал

      i += 2;   
      
      for (var j = number; j > 1; j--) {

        if ( j % 100 ===0) {

          kolTen += 2;
          continue;
        }

        if ( j % 75 ===0) {
          kolFive++;
          kolTen++;
          continue;
        }

        if ( j % 50 ===0) {
          kolFive++;
          kolTen++;
          continue;
        }

        if ( j % 25 ===0) {
          kolFive++;
          kolTen++;
          continue;
        }

        if (j % 10 === 0) {     

          kolTen++;     
          continue;          
        }

        if (j % 5 === 0) {     
          
          kolFive++;     
          continue;          
        }

        if (j % 2 === 0) {     
          
          kolTwo++;     
          continue;          
        }
          
      }       

    }
  }

  if (kolFive < kolTwo) {
    kol += kolFive;
  } else kol += kolTwo;

  kol += kolTen;

  if (kolTwo === 0)
    return 0;

  return kol;
}
