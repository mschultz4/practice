
function a() {
  let x = 4;

  function b(){
    console.log(x)
  }

  return b;
}

const z = a();
// z();


// for (let i = 1; i < 6; i++) {
//   setTimeout(()=> console.log(i), 100)
// }

// lexical this

val = 4;
const x = {
  val: 1,
  getVal: function () {
    const q = () => {console.log(this.val)}
    q();
  }

}

const y = x.getVal;
x.getVal()
y();