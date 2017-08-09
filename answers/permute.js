import test from "tape"
/**
 * 
 * @param {*} str 
 * Assumptions
 * 1. only strings
 * 2. single words. no spaces
 * 3. punctuation treated same as a letter
 */
const permute = (str) => {
  let result = [];

  const mute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m.join(""))
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 mute(arr)

 return result;
}

test("permute returns all permutations", t => {
  t.deepEqual(permute(''), [])
  t.deepEqual(permute('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  t.deepEqual(permute('ab'), ['ab', 'ba'])
  t.end()
})