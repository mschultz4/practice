"use strict";

const test = require("tape");

class BinarySearchTree {
  constructor(...values) {
    this.root = values[0] ? values[0] : null;
  }

  add(...values) {
    let current;
    if (!this.root) {
      this.root = { value: values[0], left: null, right: null };
    }
    current = this.root;

    values.forEach(value => {
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = { value, left: null, right: null };
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = { value, left: null, right: null };
            return this;
          }
          current = current.right;
        } else {
          return this;
        }
      }
    });

    return this;
  }

  has(value) {
    let current = this.root;
    while (true) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        if (!current.left) {
          return false;
        }
        current = current.left;
      } else {
        if (!current.right) {
          return false;
        }
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    let current = this.root;
    let previous;
    let children = 0;
    let found = false;

    if (!tree.has(value)) {
      console.log("value not found in tree");
      return this;
    }

    while (!found && current) {
      if (current.value === value) {
        found = true;
      } else if (current.value < value) {
        previous = current;
        current = current.right;
      } else {
        previous = current;
        current = current.left;
      }
    }

    // count children
    children = (current.left ? 1 : 0) + (current.right ? 1 : 0);

    // special case root
    if (!previous) {
    }

    // normal case
    switch (children) {
      case 0:
        if (previous.value < value) {
          previous.right = null;
        } else {
          previous.left = null;
        }

      case 1:
        if (previous.value < value) {
          previous.right = null;
        } else {
          previous.left = null;
        }
    }
  }

  size() {}
}

test("Tree class should add new values in the correct location", t => {
  let tree = new BinarySearchTree();
  tree.add(5, 7, 3, 4);
  tree.add(6);
  t.equals(tree.root.value, 5);
  t.equals(tree.root.right.value, 7);
  t.equals(tree.root.left.right.value, 4);
  t.equals(tree.root.right.left.value, 6);
  t.end();
});

test("Tree has method should correctly determine presence of value", t => {
  let tree = new BinarySearchTree();
  tree.add(2, 5, 3);
  t.ok(tree.has(2));
  t.ok(tree.has(5));
  t.notOk(tree.has(4));
  t.end();
});

test("Remove method should remove value from tree", t => {
  let tree = new BinarySearchTree();
  tree.add(2, 5, 3);
  tree.remove(3); // undefined
  t.equals(tree.root.right.left, null);
  tree.add(4);
  tree.add(3);
  tree.remove(4);
  t.equals(tree.root.right.left.value, 3);
  tree.remove(34);
  t.end();
});

// test("Size method correctly returns size", t => {
//   let tree = new BinarySearchTree();
//   tree.add(2,5,3);
//   t.equals(tree.size(), 3); // 4
//   t.add(4)
//   t.equals(tree.size(), 4); // 4
//   t.remove(2)
//   t.equals(tree.size(), 3)
//   t.end();
// })
