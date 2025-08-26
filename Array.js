var student=["a","b","c","d"];
console.log(student);
console.log(student[3]);
console.log(student.length);

demo(2,5)
function demo(num1,num2,num3=null)
{
    console.log(num1+num2+num3);
}

demo(1);
demo("hii","hello")
demo(45,"A")
demo("A",45)
demo(1,1)

