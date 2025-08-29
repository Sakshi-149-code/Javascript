const p1=Promise.resolve(303);
const p2=Promise.reject(404);
const p3=Promise.resolve("done");

Promise.race([p1,p3,p2]).then((v)=>
{
    console.log(v);
}).catch((v)=>
{
    console.log(v);
})