/**
 * These are equivalent
 */

function bubbles() {}
bubbles.prototype.sayHi = () => console.log("hello");
const x = new bubbles();
x.sayHi();

const y = { sayBye: () => console.log("bye") };
const z = Object.create(y);
z.sayBye();

var foo = 'outside'; 
function logIt(){
  console.log(foo); 
  var foo = 'inside';
} 

logIt();

var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a); 

var num = 10,
name = "Addy Osmani",
obj1 = {
  value: "first value"
},
obj2 = {
 value: "second value"
},
obj3 = obj2;

function change(num, name, obj1, obj2) {
num = num * 10;
name = "Paul Irish";
obj1 = obj2;
obj2.value = "new value";
}

change(num, name, obj1, obj2);

console.log(num); // 10
console.log(name);// "Addy Osmani"
console.log(obj1.value);//"first value"
console.log(obj2.valuee);//"new value"
console.log(obj3.valuee);//"new value"  