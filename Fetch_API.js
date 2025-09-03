const prom=fetch("https://dummyjson.com/todos");

prom.then((v)=>
{
     return v.json();
}).then((v)=>
    {
        let data=new Array(v.todos);
        data.forEach((i)=>
        {
            i.forEach((j)=>
            {
                if(j.completed==true)
                {
                    console.log(j);
                    console.log("*************************")
                }
                else
                {
                    console.log("Status false")
                }
            })
        })
   
}).catch((e)=>
{
    console.log(e);
})