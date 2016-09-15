function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
	var newNode;
  
  if(!head){
  	return new Node(data);
  }
  
 	newNode = new Node(data);
  newNode.next = head;
  return newNode;
 }

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}