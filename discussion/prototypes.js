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