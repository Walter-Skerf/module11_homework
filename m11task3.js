function numArg(n)
 {
    return function numArg2(a)
    {return console.log(a+n);

    }

}
const num = numArg(2)
num(3)