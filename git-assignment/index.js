function checkprime(num){
  let count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
    count++
    }
  }
  if(count==2){
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