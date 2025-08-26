let count=1;
let str="a";
let interval=setInterval(append,2000);
function append()
{
    console.log(str+='a');
    count++;
    console.log(count);
    if(count>5)
    {
        clearInterval(interval);
    }
}