const p1=Promise.resolve(100);
const p2=Promise.resolve(200);
const p3=Promise.reject("failed");
const p4=Promise.resolve("success");

Promise.allSettled([p3,p1,p2,p4]).then((v)=>
{
    console.log(v);
}).catch((v)=>
{
     console.log(v);
})