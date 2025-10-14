//map
const mmap=new Map();
mmap.set(1,"a");
mmap.set(2,"b");
mmap.set(3,"c");
mmap.set(4,"d");
console.log(mmap);
console.log(mmap.get(1));
console.log(mmap.has(1));
mmap.delete(3);
console.log(mmap.size)
 
//set
const s=new Set([1,2,2,2,3,4]);
console.log(s);

//spread
var arr=[1,2,3,4,5];
var arr2=[...arr,6,7,8];
var arr3=[...arr,...arr2];
var arr4=[...arr3];
console.log(arr4);

//Template literals
let a='Rently'
console.log(`${a} Cbe`);

//Rest
function rest(...num){
    console.log(num)
}
rest(1,2,3,4,5,6,7,8,9);

const r=(...v) =>{
    console.log(v)
}
r(88,99,77,66,555);


//Array Destructuring
var dsarr=[1,2,3,4,5,6];
let [x,y,z]=dsarr;
console.log(x);
console.log(y);
console.log(z);
let [p,,o,...t]=dsarr;
console.log(p,o,t);
[x,y]=[y,x];
console.log(x,y);


//Object in Js
let det={
    name:"parmesh",
    age:20

};
console.log(det);

let obj = new Object();
obj.name= "Ragav",
obj.age= 20,
obj.job= "Developer"

console.log(obj);


// Using Dot Notation
console.log(obj.name);

// Using Bracket Notation
console.log(obj["age"]);

obj.age = 23;
console.log(obj);


//object Destructuring
let obj1={
name1:"abcd",
add:{
    country:"India",
    state:"tn",
    dt:"cbe"
    
}
}
let { name1}=obj1;
let{ add:{ country:v }}=obj1;
console.log(name1);
console.log(v)


// String manupulations
let A ="                  Delta compression using                     ";
let b=A.slice(-6,-1)   

let k=A.substring(-1,0) //treats negative indices as 0
//let u=A.substr(-7,5)  doubt

console.log(b);
console.log(k);

let l= A.replace("Delta","delta");
console.log(l);

let str="Apple orange grapes grapes apple apple orange";
let sub=str.replaceAll("apple","APPLE")
console.log(sub);

let up=A.toUpperCase();
let lo=A.toLowerCase();
let loc=A.toLocaleUpperCase(); //doubt
console.log(up);
console.log(lo);
console.log(loc);


let con=A.concat("JAvascript")

let trm=A.trim();
let trms=A.trimStart();
let trme=A.trimEnd();

console.log(con);
console.log(trm.length);
console.log(trms.length);
console.log(trme.length);
console.log(A.length);

console.log(A);

//Array methods
// Array mapping
let ar=[1,4,9,16,25];

let m=ar.map(i => Math.sqrt(i));
console.log(m)

let sr=["APPLE","ORANGE","GRAPE"];
let srm=sr.map(i => i.toLowerCase());

let src=sr.map(i => i.concat("-Fruits"));
console.log(srm)
console.log(src)


//filter
let fil=[1,2,3,4,5,6,7,8,9,10];
let ftr=fil.filter(i => i%2==0)
console.log(ftr)

//reduce
let re=[1,2,34,5,6,7]
let red=re.filter((acc,i) => -1)
console.log(red)

const maxn = re.reduce((acc, i) => {return Math.max(acc, i)}, -Infinity);

console.log(maxn); 


