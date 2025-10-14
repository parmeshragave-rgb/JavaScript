/*//map
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



console.log(obj.name);


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

//////////////////////////////////////////////////////////////////////////////////////////

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

reduce
let re=[1,2,34,5,6,7]
let red=re.reduce((acc,i) => -1)
console.log(red)

const maxn = re.reduce((acc, i) => Math.max(acc, i), -Infinity);
const minn = re.reduce((acc, i) => Math.min(acc, i), Infinity);
const sum=re.reduce((acc,i) => acc+i,0)


console.log(sum); 
console.log(maxn); 
console.log(minn); 

let td= [[10,20,30],[10,20,30],[10,20,30]]
console.log(td)

let od=td.reduce((acc,i) => acc.concat(i),[])
console.log(od)


//other array methods
let arrr=[1,1,1,1,1,1,1,1,1,1,1,1,12];
let f=arrr.find(i => i>2) //find only first occurence for the given condition
console.log(f)

let fruits = ['apple', 'banana', 'orange', 'grape'];
let ff = fruits.find(fruit => fruit.includes('n'));
console.log(ff);

let fruit="Apple"
let frin=fruit.includes('n')
console.log(frin)

let uno=[22,999,33,0,333,-1,0,11]
let asc=uno.sort()
uno.pop();          // doubt

console.log(asc)
console.log(uno)


asc.push(1);
console.log(asc)

uno.unshift(1);
console.log(uno)

let L = [20, 30, 40, 50];
L.splice(1, 3);
L.splice(1, 0, 3, 4, 5);
console.log(L);


let jn=uno.join(" || ");
console.log(jn)


let ustr=uno.toString();
console.log(ustr)

let rr="1";
let uu="1"
let ru=rr+uu
console.log(ru)

let nr=Number(rr)
let un=Number(uu)
let rus=nr+un
console.log(rus)


const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const a2 = a1.flat(Infinity);
console.log(a2);

function arithmetic(callback,a,b){

    return callback(a,b);

}

function add(x,y){
    return x+y;
}

function minus(x,y){
    return x-y;
}

console.log(arithmetic(add,1,3))
console.log(arithmetic(minus,9,3))

function cback(name,callback){
    console.log("hii"+name)
    callback();
}
function cg(){
    console.log("BYE");
}
cback("Leo",cg)



setTimeout( function(){
    console.log("timeout")//asynchronous function that takes a callback to execute after 2 seconds.
},2000)

console.log("timein")


///bind
const person={
    name: "parmesh",
    msg:function (location,ph_no){
         console.log("hello " +this.name+location+ph_no);
    }
}
let sy=person.msg;
let ss=(person.msg).bind(person);
person.msg(" coimbatore"," 56789");
ss(" noida"," 123456");
///call
sy.call(person," banglore"," 102345 ")

//apply
sy.apply(person,[" chennai "," 123344 "])


//promises
const pro=new Promise((resolve,reject) =>{
    let num=4;
    if(num>2){
        resolve("num>4")
    }
    else{
        reject("num<4")
    }
});
pro
    .then((message) => console.log(message)) 
    .catch((error) => console.error(error));


const checknum= new Promise((resolve,reject) => {
    let num=9;
    if(num%2==0){
        resolve("even")
    }
    else{
        reject("odd")
    }

})
checknum
   .then((messege)=>console.log(messege))
   .catch((error) => console.log(error))


//async/await
const ge = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
ge();
console.log(2);


const aw = async () =>{
    
    let kk= await "kjni"
    console.log(kk)
}
console.log("123");
aw();
console.log("123");

//setTimeout
setTimeout(() =>{
    console.log("hii")
},2000)
*/
//////////////////////////////////////////////////////////////////////////////////////////
let gr=() => {
    console.log("hi");
}
gr();

let arm=[1,2,3,4,5,6,7,8,9,12,2,3,45]
let mapp=arm.map(i => i*2)
console.log(mapp)


let fil=arm.filter(i => i%3==0)
console.log(fil)

let rdu=arm.reduce((acc,i) => Math.max(acc,i),-Infinity)
console.log(rdu)

function start(callback,a,b){
    console.log("started");
    callback(a,b);
}
function add(x,y){
    console.log(x+y);
}
start(add,1,2);


const promise=new Promise((resolve,reject) => {
    let num=7
    if(num%2==0){
        resolve("even")
    }
    else{
        reject("odd")
    }
})

promise
.then((messege) => console.log(messege))
.catch((error) => console.log(error))


const fun = async () =>{
    let sdd=await "helloworld";
    console.log(sdd);
}
console.log("async")
fun();
console.log("promise")


const obj={
    name:"ragav",
    greet: ()=>{
          console.log("hello "+this.name);
    }
       
    }
let cl=(obj.greet).bind(obj);
cl();


