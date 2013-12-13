var a,b,result;

a =0;
b =1;
sum = 0;
result = 0;

while(result < 4000000) {
  console.log(result);
  result = a+b;
  a=b;
  b=result;
  if (result % 2 === 0) {
    sum = sum+ result;
  }
}

console.log(sum);

//4613732
