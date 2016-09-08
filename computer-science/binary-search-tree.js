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
                if (current.right) {
                    current = current.right;
                }
                else {
                    current.right = node
                    break;
                }
            }
        }
    }
    this._size += 1;

    return this;
}

function contains(data) {
    var current = this._head,
        found = false;

    while (!found && current) {
        if (current.data === data) {
            found = true;
        }
        else if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }

    return found;
}

function remove(data) {
    var current,
        parent,
        found,
        children = 0;

    // check value in list
    if (!this.contains(data)) {
        console.log("cannot remove.  value not found");
        return;
    }

    current = this._root;

    // find node and its parent
    while (!found && current) {
        if (current.data === data) {
            found = true;
        }
        else if (current.data > data) {
            parent = current;
            current = current.left;
        }
        else {
            parent = current;
            current = current.right;
        }
    }
    
    // count children
    children = (current.right ? 1 : 0) + (current.left ? 1 : 0); 
    
    //special case: root
    if(current === this._root){
       switch(children){
           
           // no children, remove root
           case 0 : 
               this._root = null;
               break;
               
            // one child
            case 1 : 
                this._root = this.right ? this.right : this.left;
                break;
                
            // two children
            case 2 : 
                
       } 
        
    }
}

function getSize() {
    return this._size;
}

// Tests

test("add nodes", function(t) {
    var tree = new Tree();
    tree.add(2).add(5).add(3);
    t.equals(tree._root.right.left.data, 3);
    t.end();
});


test("contains returns true", function(t) {
    var tree = new Tree();
    tree.add(2).add(5).add(4).add(45);
    t.ok(tree.contains(45));
    t.end();
})