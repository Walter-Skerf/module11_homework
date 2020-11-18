function task7(){
    let arr = [1,2,3,4,0]

    let a;
    let b=0;
    let s=0;
    let f=0;
    for(a=0; a < arr.length; ++a)
    {
    if(typeof(arr[a])== "number" )
        {
      
      if (arr[a]%2 == 0) 
        
      {if(arr[a] ==0){f=++f}
       else {b=++b}}
      else 
      {s=++s}
        }
    else
    {}
    
    }
    console.log(`Чётных чисел: ${b}`)
    console.log(`Не чётных чисел: ${s}`)
    console.log(`Чисел равных нулю: ${f}`)}

    task7()