var sport="Cricket";
let game="Football";


function demo()
{
    var sport="tennis";
    console.log("Functional scope:",sport);
    
    if(true)
    {
        var sport="Kho-Kho";
        let game="Kabbadi";

         console.log("Block level scope:",sport);
         console.log("Block level scope:",game);  
    }

     console.log("functional scope over the Shadowing:",sport);
}
demo();
console.log("Global scope:",sport);
console.log("Global scope:",game);

