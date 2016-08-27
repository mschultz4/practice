"use strict";

var test = require("tape");

function Node(value) {
    this.value = value;
    this.next = null;
}

function List() {
    this._head = null;
    this._length = 0;
}

List.prototype.add = add;
List.prototype.getLength = getLength;
List.prototype.remove = remove;
List.prototype.find = find;

/**
 * Add new node
 * @params {*} value of node to be added
 * @returns undefined
 */ 
function add(value) {
    var current;
    if (!this._head) {
        this._head = new Node(value);
    }
    else {
        current = this._head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }
    this._length += 1;
    
    return this;
}

/**
 * Remove existing node by index
 * @params {number} index The index of the node to be removed
 * @returns {object} the list
 */
function remove(index){
    var current = this._head,
        previous,
        count = 0;
    
    if(this._length < 1 || index > this._length){
        console.log("no nodes to remove");
        return;
    }
    
   while(count < index){
      previous = current;
      current = current.next;
      count += 1;
   } 
   
   previous.next = current.next;
   this._length -= 1;
   return this;
}

/**
 * Find node at index
 * @params {number} Index of node to return
 * @returns {object} the node
 */
 function find(index){
    var count = 0,
        current = this._head;
        
    if(this._length < 1 || index > this._length-1){
        console.log("no node to find");
        return;
    }
    
    while(count < index){
       current = current.next; 
       count += 1;
    }
    
    return current;
 }


function getLength() {
    return this._length;
}


// Tests

test("creates new list", function(t) {
    t.ok(new List());
    t.end();
});

test("Adds new node", function(t) {
    var list = new List();
    list.add("hello");
    list.add("howdy");
    t.equal(list._head.value, "hello", "Adds head");
    t.equal(list._head.next.value, "howdy", "Adds second node");
    t.equal(list._length, 2, "Increments length");
    t.end();
});

test("Returns length", function(t) {
    var list = new List()
        .add(1)
        .add(2)
        .add(3);
    t.equal(list.getLength(), 3);
    t.end();
});

test("Removes Node", function(t){
    var list = new List().add(1).add(2).add(3).remove(1);
    t.equals(new List().remove(), undefined, "handles no nodes");
    t.equals(list._head.next.value, 3, "removes node");
    t.equals(list._length, 2, "adjusts length");
    t.end();
});

test("Finds node", function(t){
    var list = new List().add(1).add(2).add(3);
    t.equals(list.find(2).value, 3, "finds node");
    t.equals(list.find(53), undefined, "Handles no node");
    t.end();
})