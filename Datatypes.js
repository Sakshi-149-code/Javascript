var age=40;
console.log(age+1);//number

var age="13";
console.log(age+6+0+5);  //string
console.log("G">60); //false

var mobile=135456898568740000000000n;
console.log(typeof(mobile));//bigint

var flag=true;
console.log(typeof(flag));  //boolean

var address=null;
console.log(address); //null
console.log(typeof(address)); //object
console.log(null+1); //1

console.log(null+"null"+1+1+1); //nullnull111
console.log(+null+"null"+1+1+1); //0null111
console.log(1+null+"null"+1+1+1); //1null111

var city;
console.log(city);  //undefined
console.log(typeof(city))
console.log(undefined+3); //infinite+3 => NaN
console.log(undefined+"2"); //undefined2