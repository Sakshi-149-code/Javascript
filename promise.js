const prom=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
let age=71;
if(age>40)
{
    resolve("Success");
}
    reject("Failure");
    },2000)
})

prom.then((v)=>
{
    console.log(v);
}).catch((e)=>
{
    console.log(e);
}).finally(()=>
{
    console.log("Done");
})

setTimeout(()=>{
 console.log(prom);
},3000);