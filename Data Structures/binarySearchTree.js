"use strict";

var test = require("tape");

/**
 * Node 
 * @constructor
 */
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

/**
 * Binary Search Tree
 * @constructor
 */
function Tree() {
    this._root = null;
    this._size = 0;
}

Tree.prototype = {
    add,
    contains,
    getSize
};

/**
 * Add new tree node
 * @params {*} data Data to add to tree
 * @returns {object} the tree
 */
function add(data) {
    // create node to add
    var node = new Node(data),
        current;

    //if no root, create root
    if (this.getSize() < 1) {
        this._root = node;
    }

    // if contains, don't add
    else if (this.contains(data)) {
        console.log("cannot add duplicate data");
    }
    else {
        current = this._root;
        while (true) {
            if (data < current.data) {
                if (current.left) {
                    current = current.left;
                }
                else {
                    current.left = node;
                    break;
                }
            }
            else {
                if(current.right){
                    current = current.right;
                } else { 
                    current.right = node;
                    break;
                }
            }
        }
    }
   this._size += 1; 
   
    return this;
}

function contains(data) {
    var current = this._root,
        found   = false;
    
    while(!found && current){
        if(current.data === data){
            found = true;
        } else if(data < current.data){
            current = current.left;
        } else {
            current = current.right;
        }
    }
    
    return found;
}

function getSize() {
    return this._size;
}

// Tests

test("add nodes", function(t){
    var tree = new Tree();
    tree.add(2).add(5).add(3);
    t.equals(tree._root.right.left.data, 3);
    t.end();
});


test("contains returns true", function(t){
    var tree = new Tree();
    tree.add(2).add(5).add(4).add(45);
    console.log(tree);
    t.ok(tree.contains(2), "finds root");
    t.ok(tree.contains(45), "finds data");
    t.end();
})