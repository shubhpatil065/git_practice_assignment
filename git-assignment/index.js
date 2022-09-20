function checkprime(number){
  let factor=0;
  for(let i=1;i<=number;i++){
    if(number%i==0){
    factor++
    }
  }
  if(factor==2){
   return true
  }else{
    return false
  }
}
let answer=checkprime(15);

if(answer==true){
  console.log("prime");
}
else if(answer==false){
  console.log("Not prime");
}