# Concepts
* What is Big O notation, and why is it useful?
* What is the DOM?
* What is the event loop?
* What is a closure?
* How does prototypal inheritance work, and how is it different from classical inheritance? (this is not a useful question IMO, but a lot of people like to ask it)
* How does this work?
* What is event bubbling and how does it work? (this is also a bad question IMO, but a lot of people like to ask it too)
* Describe a few ways to communicate between a server and a client. Describe how a few network protocols work at a high level (IP, TCP, HTTP/S/2, UDP, RTC, DNS, etc.)
* What is REST, and why do people use it?
* My website is slow. Walk me through diagnosing and fixing it. What are some performance optimizations people use, and when should they be used?
* What frameworks have you used? What are the pros and cons of each? Why do people use frameworks? What kinds of problems do frameworks solve?
* Async programming: promises vs async/await vs callbacks

# Implement the following functions (tests follow each question):
## Easy
* isPrime - Returns true or false, indicating whether the given number is prime.
* factorial - Returns a number that is the factorial of the given number.
* fib - Returns the nth Fibonacci number.
* isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
* filter - Implement the filter function.
* reduce - Implement the reduce function.
* reverse - Implement reverse.
* indexOf - Implement the indexOf function for arrays.
* isPalindrome - Return true or false indicating whether the given string is a palindrone (case and space insensitive).
* missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
* isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

 ## Intermediate
* fib2 - Like the fib function you implemented above, able to handle numbers up to 50 (hint: look up memoization).
* isBalanced2 - Like the isBalanced function you implemented above, but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.
* uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?

uniq([])                              // []
uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

* intersection - Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
* sort - Implement the sort function to sort an array of numbers in O(N×log(N)) time. 
* assignDeep - Like Object.assign, but merges objects deeply. For the sake of simplicity, you can assume that objects can contain only numbers and other objects (and not arrays, functions, etc.).
* includes - Return true or false indicating whether the given number appears in the given sorted array. Can you do it in O(log(N)) time?

includes([1, 3, 8, 10], 8)            // true
includes([1, 3, 8, 8, 15], 15)        // true
includes([1, 3, 8, 10, 15], 9)        // false

* reduceAsync - Like the reduce you implemented in the Easy section, but each item must be resolved before continuing onto the next.

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
// ['a', 'b', 'c']
await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
// ['d', 'a', 'c', 'b']

* Implement seq in terms of reduceAsync. seq takes an array of functions that return promises, and resolves them one after the other.

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => Promise.resolve('c')
await seq([a, b, c])                  // ['a', 'b', 'c']
await seq([a, c, b])                  // ['a', 'c', 'b']

## Advanced
Note: For the data structures you’ll implement below, the idea isn’t to memorize them, but just to be able to look at the given API, Google how they work, and implement them, and to have a high level idea of what they are used for and what their tradeoffs are compared to other data structures.

* permute - Return an array of strings, containing every permutation of the given string.


* debounce - Implement the debounce function.

let a = () => console.log('foo')
let b = debounce(a, 100)
b()
b()
b() // only this call should invoke a()

* Implement a LinkedList class without using JavaScript’s built-in arrays ([]). Your LinkedList should support just 2 methods: add and has:

class LinkedList {...}
let list = new LinkedList(1, 2, 3)
list.add(4)                           // undefined
list.add(5)                           // undefined
list.has(1)                           // true
list.has(4)                           // true
list.has(6)                           // false

* Implement a HashMap class without using JavaScript’s built-in objects ({}) or Maps. You are provided a hash() function that takes a string and returns a number (the numbers are mostly unique, but sometimes two different strings will return the same number):

function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

Your HashMap should support just 2 methods, get, set:

let map = new HashMap
map.set('abc', 123)                   // undefined
map.set('foo', 'bar')                 // undefined
map.set('foo', 'baz')                 // undefined
map.get('abc')                        // 123
map.get('foo')                        // 'baz'
map.get('def')                        // undefined

* Implement a BinarySearchTree class. It should support 4 methods: add, has, remove, and size:

let tree = new BinarySearchTree
tree.add(1, 2, 3, 4)
tree.add(5)
tree.has(2)                           // true
tree.has(5)                           // true
tree.remove(3)                        // undefined
tree.size()                           // 4

* Implement a BinaryTree class with breadth first search and inorder, preorder, and postorder depth first search functions.

let tree = new BinaryTree
let fn = value => console.log(value)
tree.add(1, 2, 3, 4)
tree.bfs(fn)                          // undefined
tree.inorder(fn)                      // undefined
tree.preorder(fn)                     // undefined
tree.postorder(fn)                    // undefined

## Debugging

For each of the following questions, start by understanding and explaining why the given piece of code doesn’t work. Then propose a couple of fixes, and rewrite the code to implement one of the fixes you proposed so the program works correctly:

* I want this code to log out "hey amy", but it logs out "hey arnold" - why?

function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })

* What does this log?

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

* I want this code to log out "doggo", but it logs out undefined!

let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()

* I want my dog to bark(), but instead I get an error. Why?

function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()

* Why does this code return the results that it does?

function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true

## System design
### Resources
* https://github.com/donnemartin/system-design-primer 

### Questions
* Talk me through a full stack implemention of an autocomplete widget. A user can type text into it, and get back results from a server.

* How would you design a frontend to support the following features:
  - Fetch data from a backend API
  - Render results as a tree (items can have parents/children - it’s not just a flat list)
  - Support for checkbox, radio button, icon, and regular list items - items come in many forms
  * What does the component’s API look like?
  * What does the backend API look like?
  * What perf considerations are there for complete-as-you-type behavior? Are there any edge cases (for example, if the user types fast and the network is slow)?
  * How would you design the network stack and backend in support of fast performance: how do your client/server communicate? How is your data stored on the backend? How do these approaches scale to lots of data and lots of clients?

* Talk me through a full stack Twitter implementation (shamelessly stolen from my friend Michael Vu).
  - How do you fetch and render tweets?
  - How do you update tweets as new ones come in? How do you know when new ones came in?
  - How do you search tweets? How do you search by author? Talk me through your database, backend, and API designs.

# Resume/linkedin tips
## linkedin search
1. Adequately and accurately describe your position in your title fields. These are the most important fields for both getting found in search as well as getting clicked on.
2. Have as many connections as possible
3. Have your location set (where you want to get a job)
4. Select your company from the autofill option when stating who you currently and previously worked for
5. Communicate regularly with the top recruiters, even if it’s just to say hi

# Further resources
Javascript Allonge
Eloquent javascript
http://amzn.to/2uz3vEG
http://amzn.to/2uvUrR7
https://medium.freecodecamp.org/how-to-interview-your-interviewers-f8f65ac57b80

