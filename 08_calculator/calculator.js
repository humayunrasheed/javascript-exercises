const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
  let sum =0;
  for ( let i=0;i<array.length;i++){
    sum+=array[i];
  }
	return sum;
};

const multiply = function(array) {
  let mul =1;
  for ( let i=0;i<array.length;i++){
    mul*=array[i];
  }
	return mul;
};

const power = function(num,val) {
  let ans=1;
  for (let i=0;i<val;i++){
    ans*=num;
  }
  return ans;	
};

const factorial = function(num) {
  let product = 1;
  if(num===0)return 1;
  
  else{
    for (let i=1;i<=num;i++){
      product*=i;
    }
    return product;
  }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
