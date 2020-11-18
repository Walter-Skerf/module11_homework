function sam (u,p)
{
  let a =u;
let b =p;

let intervalId = setInterval
(function(i,b)
{
  if(a<=b){
   console.log(a);
    ++a}
  else{clearInterval(intervalId);}
    
}
 ,1000,a,b)
};
sam(5,15)
