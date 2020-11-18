function numPrime(a) {
    if(a>1000)
    {return "Данные не верны"}
    else 
    {
    if (a < 2)
     {return "Число должно быть больше 1";} 
    else
    
    {if (a === 2) {
      return "Простое число";
    }
  
    let i = 2;
    const b = Math.sqrt(a);
    while (i <= b) 
    {
      if (a % i === 0) {
        return "Составное число";
      }
      i +=1;
    }
    }
    return "Простое число";
  }}
  console.log(numPrime(2))