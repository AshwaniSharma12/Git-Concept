// var name3;
// let name1 = document.getElementById("name").addEventListener("change",function(e){
//     name3 = e.target.value;
// })
// // console.log(name1);
// // let name2 = name1

// // console.log(name2);

// let btn = document.getElementById("submit")
// console.log(name3 === "akash");
// btn.addEventListener("click",function(){
//       if(name3 == "akash"){
//           alert("True")
//       }else{
//           alert("False")
//       }
//   })
console.log("Hello JavaSCript");
// let a;
// a = document;
// let b = a.links[0].href;
// b= "akash.com" ;
// console.log(b);
//1.Ways to print in JS
// document.write("we are writing in console");
// console.log("this is the writing method");
// alert("this is another writing method");
//2.Javascript console API
// console.warn("this is the first warning");
// console.error("this is the first error");
/*3.Data types in javascript
3.1 Primitive Datatype
3.2 Derived Datatype
*/
//3.1.1: Numbers
var num1=66;
var num2=34;
console.log(num1+num2);
//3.1.2 STRINGS
var str1="This is string";
var str2='This is also a string';
console.log(str1);
console.log(str2);
//3.1.3 OBJECTS
var student={
    ashu:98,
    akash:97,
    harshit:98
}
console.log(student);
//BOOLEAN
var a=true;
var b=false;
console.log(a,b);
//NULL and UNDEFINED
var und=undefined;
var n=null;
console.log(und);
console.log(n);
console.log(undefined);
//ARRAY
var arr=[1,2,"hello",4,5];
console.log(arr);
for( let i=0;i<5;i++)
console.log(arr[i]);
console.log("this is the foreach loop");
arr.forEach(function(element){
    console.log(element);
})
//FUNCTION
function avg(a,b){
    console.log((a+b)/2);
}
// console.log(avg(10,20));
// console.log(avg(100,1));
avg(100,1);
avg(200,100);
let myarr=["ashu","harsh",3,8,null,undefined];
console.log(myarr);
myarr.shift();
console.log(myarr);
myarr.unshift("neww",2);
console.log(myarr);
console.log(myarr.length);
const newlen=myarr.unshift("first");
console.log(newlen);
console.log(myarr);
console.log(myarr.toString());
var numarr=[10,6,2,8,9];
console.log(numarr.sort());
//String  methods in Javascript
 let mylovelystring="i am learning js i am new to js";
 console.log(mylovelystring);
 console.log(mylovelystring.indexOf("j"));
 let d=mylovelystring.replace("js","javascript");
 console.log(d,mylovelystring);
 let mydate=new Date();
 console.log(mydate);
 console.log(mydate.getTime());
 console.log(mydate.getDay());


// document.getElementById("click").style.backgroundColor = "Green"