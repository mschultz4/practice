import test from "tape";

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
  // type check
  if (typeof str !== "string")
    throw TypeError(
      `expected string but received ${Object.prototype.toString.call(str)}`
    );

  let removed = str.replace(/[^{}\[\]\(\)]/g, "");
  const open = [];
  const matches = { "{": "}", "[": "]", "(": ")" };
  let i = 0;

  while (i < removed.length) {
    // if an opener add to list of openers
    if (/[{\[\(]/.test(removed[i])) {
      open.push(removed[i]);
    } else if (matches[open[open.length - 1]] === removed[i]) {
      // if the last opener matches the closing symbol, remove from list
      open.pop();
    } else
      // if not a close then not balanced
      return false;

    i++;
  }

  return open.length > 0 ? false : true;
};

test("isBalanced2 returns correct values", t => {
  t.ok(isBalanced2("(foo { bar (baz) [boo] })"));
  t.notOk(isBalanced2("foo { bar { baz }"));
  t.notOk(isBalanced2("foo { (bar [baz] } )"));
  t.ok(isBalanced2("foo { (bar [baz]  ) }"));
  t.end();
});
