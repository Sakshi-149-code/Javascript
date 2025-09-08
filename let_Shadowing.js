let num=100;
 
function Demo()
{
  let num=200;
    console.log("Functional scope:",num);
    if(true)
    {
        let num=300;
        console.log("Block level scope:",num)
    }
    
}
Demo();
console.log("Before Global scope:",num);

num=400;
 console.log("After reassigned the value Global scope:",num);
 