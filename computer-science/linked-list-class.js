"use strict";
const test = require("tape");

class LinkedList {
  constructor(...values) {
    this.head = { value: values[0] ? values[0] : null, next: null };
    let i = 0;
    let node = this.head;

    while (i < values.length) {
      node.next = values[i + 1] ? { value: values[i + 1], next: null } : null;
      node = node.next;
      i += 1;
    }
  }

  add(value) {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    node.next = { value, next: null };
  }

  has(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  getLength() {
    let node = this.head;
    let count = 0;
    while (node) {
      count += 1;
      node = node.next;
    }

    return count;
  }

  find(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) return node;
      node = node.next;
    }
    return undefined;
  }

  remove(value) {
    let previous = null;
    let current = this.head;

    while (value !== current.value) {
      if (!current.next) return;
      previous = current;
      current = current.next;
    }

    previous ? (this.head = current) : (previous.next = current.next);
  }
}

test("Remove removes node with corresponding value", t => {
  let list = new LinkedList(1, 2, 3, 4);
  list.remove(2)
  list.remove(45)
  t.equals(list.head.next.value, 3);
  t.equals(list.head.next.next.value, 4);
  t.end();
});

test("test linked list created", t => {
  let list = new LinkedList(1, 2, 3);
  t.equals(list.head.value, 1);
  t.equals(list.head.next.value, 2);
  t.equals(list.head.next.next.value, 3);
  t.equals(list.head.next.next.next, null);
  t.end();
});

test("add method adds values", t => {
  let list = new LinkedList(1, 2, 3);
  list.add(4); // undefined
  list.add(5); // undefined
  t.equals(list.head.next.next.next.value, 4);
  t.equals(list.head.next.next.next.next.value, 5);
  t.equals(list.head.next.next.next.next.next, null);
  t.end();
});

test("Has method returns correct value", t => {
  let list = new LinkedList(1, 2, 3, 4);
  t.equals(list.has(1), true);
  t.equals(list.has(4), true);
  t.equals(list.has(6), false);
  t.end();
});

test("Length method counts correctly", t => {
  let list = new LinkedList(1, 2, 3, 4);
  t.equals(list.getLength(), 4);
  t.end();
});

test("Find returns correct node", t => {
  let list = new LinkedList(1, 2, 3, 4);
  t.deepEquals(list.find(4), { value: 4, next: null });
  t.deepEquals(list.find(2), {
    value: 2,
    next: { value: 3, next: { value: 4, next: null } }
  });
  t.end();
});
