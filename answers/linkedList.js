/**
 * Linked List
 * 
 * Assumptions
 * 1. Can store Arrays, Objects, Numbers, and Strings
 * 2. No undefined or Null
 */

function LinkedList() {
    var _head = null;
    var _length = 0;

    return {
        add: add,
        getLength: getLength,
        getHead: getHead,
        remove: remove,
        find: find
    };

    function getLength() {
        return _length;
    }

    function add(data) {
        var current = _head,
            node = {
                data: data,
                next: null
            };

        if (data === undefined || data === null) {
            throw Error("Data must be Array, Object, Number, or String");
        }

        if (!_head) {
            _head = node;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        _length += 1;
    }

    function getHead() {
        return _head;
    }

    function remove(index) {
        var current = _head,
            previous;

        if(isNaN(index) || index < 0 || index % 1 !== 0){
            throw Error("Index must be a positive integer");
        }

        if(typeof index !== "number"){
            throw TypeError("Expected a number, but got: " + Object.prototype.toString.call(index));
        }

        if (index + 1 > _length || !_head) {
            console.log("Index does not exist");
            return;
        } 

        for (var i = 0; i < index; i++) {
            previous = current;
            current = current.next
        }
        previous.next = current.next;

        _length -= 1;
    }

    function find(index){
        var current = _head;
        if(index === 0 ){
            return _head.data;
        }
        for(var i = 0; i < index; i++){
            current = current.next;
        }

        return current.data;
    }
}

var newList = LinkedList();
newList.add("some data");
newList.add("more data");
newList.add([1,2]);
newList.add({a:1, b:2});
newList.remove(2);
newList.remove(98);
//Tests

console.log(newList.getLength());
console.log(newList.getHead().next.data === "more data");
console.log(newList.getHead().next.next.data);
console.log(newList.find(2));

try{
    newList.remove([]);
}catch(error){
    console.log(error.message);
}