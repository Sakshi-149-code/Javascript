
let flag=false;
let timer=setTimeout(print,2000,10,20);
if(flag==true)
{
    clearTimeout(timer);
}
function print(a,b)
{
    flag=true;
    console.log("Hello from the print:"+(a+b));
}

console.log("Hii");
console.log("Byee");