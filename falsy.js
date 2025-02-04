const a = undefined;//undefined means always false
const b = null;//null is false
const c = true;// true is true and false is false
const d = 0;//0 is false as 1 is true we know
const e = "";//As there is empty string this is false
const f = NaN;
const g = "Hello World";//As there is string this is true
const h = [];//array is true if it's empty or with value
const i = {};//object is true if it's empty or with value

console.log(typeof(e));
if(a){
    console.log("true");
}
else{
    console.log("false");
    
}
if(!b){
    console.log("true");
}
else{
    console.log("false");
}
if(c){
    console.log("true");
}
else{
    console.log("false");
}
if(d){
    console.log("true");
}
else{
    console.log("false");
}
if(e){
    console.log("true");
}
else{
    console.log("false");
}
if(g){
    console.log("true");
}
else{
    console.log("false");
}
if(h){
    console.log("true");
}
else{
    console.log("false");
}
if(i){
    console.log("true");
}
else{
    console.log("false");
}