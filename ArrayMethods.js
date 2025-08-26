// let arr=[10,20,30,40];
// function greater(num)
// {
//     if(num<50)
//     {
//         console.log(num);
//     }
// }
// arr.find(greater);
// ********find() method*********************
// function greater(num)
// {
//      if(num<40)
//      {
//         return num;
//      }
// }

// console.log(arr.find(greater));

//*******push()/************ 

// arr.push(50)
// console.log(arr);

// // *******pop()***********

// arr.pop()
// console.log(arr);

// *********shift()************

let nums=[10,70,20,20,49,50,20]
nums.shift()
console.log(nums);

// ******unshift()*******

nums.unshift(1,1000,2000)
console.log(nums);

//*****Map************

let num2=[10,20,30,40,50]
function double(num)
{
    return num*2
}
let num3=num2.map(double)
console.log(num3)

/*************Filter****/
let nums1=[11,13,21,43,56,3,76,23,85,103,99]
let nums2=nums1.filter(higher)
function higher(num)
{
    if(num+15>100)
    {
        return num
    }
}
 console.log(nums2)

 /*********for Each */

 let arr=[10,3,6,11,17,4,64]
 function OddEven(num)
 {
    if(num%2==0)
    {
        console.log(num)
    }
 }
//   console.log(OddEven(23))
 arr.forEach(OddEven)