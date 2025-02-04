let a,b,rest;
[a,b,...rest]=[10,20,30,40,50]
// [...rest]=[30,40,50,60]
console.log(a);
console.log(b);
console.log(rest);
console.log(a,b,...rest);
console.log(typeof(rest));
const mobile={company:"samsung",model:"A50",call:"yes",text:"yes",fiveG:"no"}
// console.log(mobile);
const {company,model,call}=mobile;
console.log(company,model,call);

////////////////////////////////////////////////////////////////////////
let i=10;
let j=20;
console.log(i,j);
[i,j]=[j,i];
console.log(i,j);

/////////////////////////////////////////////////////////////////////
const color=["red","green","blue","white","yellow"]
console.log(color);
[color[0],color[4]]=[color[4],color[0]];
console.log(color);

///////////////////////////////////////////////////////////////////////
const color2=["red","green","blue","white","yellow"]
const [first,second,third,fourth]=color2;
console.log(first,second);
console.log(third,fourth);

////////////////////////////////////////////////////////////////////////
const color3=["red","green","blue","white","yellow","pink","brown"]
const [one,two,...rest1]=color3;
console.log(one);
console.log(rest1);
/////////////////////////////////////////////////////////////////////////////
const mobile1={company1:"samsung",model:"A50",call:"yes",text:"yes",fiveG:"no"};
const {company1,...rest2}=mobile1;
console.log(company1);
console.log(rest2);


