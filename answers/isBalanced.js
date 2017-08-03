import test from "tape"

const isBalanced = str => {
  if (typeof str !== "string")
    throw TypeError(
      `expected string but received ${Object.prototype.toString.call(str)}`
    );
  let removed = str.replace(/[^{}]/g, "");
  let reversed = removed
    .replace(/{|}/g, match => (match === "{" ? "}" : "{"))
    .split("")
    .reverse()
    .join("");

  return removed === reversed && removed[0] !== "}";
};

test("isbalanced correctly identifies balanced strings", t => {
  t.notOk(isBalanced("}{"));
  t.notOk(isBalanced("{{}"));
  t.notOk(isBalanced("{{{}"));
  t.ok(isBalanced("{}{}"));
  t.ok(isBalanced("foo { bar { baz } boo }"));
  t.notOk(isBalanced("foo { bar { baz }"));
  t.notOk(isBalanced("foo { bar } }"));
  t.end();
});

const isBalanced2 = str => {
  if (typeof str !== "string")
    throw TypeError(
      `expected string but received ${Object.prototype.toString.call(str)}`
    );
  let removed = str.replace(/[^{}]/g, "");
  let reversed = removed
    .replace(/[{}[]\(\)]/g, match => {
      switch (match) {
        case "{":
          return "}";
        case "}":
          return "{";
        case "[":
          return "]";
        case "]":
          return "[";
        case "(":
          return ")";
        case ")":
          return "(";
        default:
          return "";
      }
    })
    .split("")
    .reverse()
    .join("");

  return removed === reversed &&  !["}", "]", ")"].includes(removed[0]);
};

test("isBalanced2 returns correct values", t => {
  t.ok(isBalanced2('(foo { bar (baz) [boo] })')) 
  t.notOk(isBalanced2('foo { bar { baz }'))
  t.notOk(isBalanced2('foo { (bar [baz] } )'))
})
