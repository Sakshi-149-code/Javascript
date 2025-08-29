const prom=Promise.resolve(100);
const prom2=Promise.resolve(1500);
const prom3=Promise.resolve("Unauthorized");

Promise.all([prom,prom2,prom3]).then((v)=>
{
    console.log(v);
}).catch((v)=>
{
    console.log(v);
})