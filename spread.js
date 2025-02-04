function addNumber(a,b,...rest){
    console.log(rest);
    return a+b+rest[0];
}
const val1=addNumber(10,20,30,40);
console.log(val1);
