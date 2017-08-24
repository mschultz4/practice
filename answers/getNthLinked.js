import test from "tape";

const Node = data => ({ data, next: null });
const push = (head, data) => {
  const node = new Node(data);
  node.next = head || null;
  return node;
};

const buildOneTwoThree = () =>
  [3, 2, 1].reduce((prev, next) => push(prev, next), null);

const getNth = (node, index) => {
  if (Object.prototype.toString.call(node) !== "[object Object]")
    throw TypeError(
      `expected an object but received ${Object.prototype.toString.call(node)}`
    );

  let i = 0;
  let head = node;
  while (i < index) {
    if (head.next) {
      head = head.next;
    } else {
      throw Error("index exceeds list size");
    }
    i += 1;
  }

  return head;
};

test("tests for getting the Nth node in a linked list.", function(t) {
  var list = buildOneTwoThree();
  t.equals(getNth(list, 0).data, 1, "First node should be located at index 0.");
  t.equals(
    getNth(list, 1).data,
    2,
    "Second node should be located at index 1."
  );
  t.equals(getNth(list, 2).data, 3, "Third node should be located at index 2.");
  t.throws(function() {
    getNth(list, 3);
  });
  t.throws(function() {
    getNth(list, 100);
  });
  t.throws(function() {
    getNth(null, 0);
  });
  t.end();
});

test("tests for inserting a node before another node.", function(t) {
  t.equals(
    push(null, 1).data,
    1,
    "Should be able to create a new linked list with push()."
  );
  t.equals(
    push(null, 1).next,
    null,
    "Should be able to create a new linked list with push()."
  );
  t.equals(
    push(new Node(1), 2).data,
    2,
    "Should be able to prepend a node to an existing node."
  );
  t.equals(
    push(new Node(1), 2).next.data,
    1,
    "Should be able to prepend a node to an existing node."
  );
  t.end();
});

test("tests for building a linked list.", function(t) {
  t.equals(
    buildOneTwoThree().data,
    1,
    "First node should should have 1 as data."
  );
  t.equals(
    buildOneTwoThree().next.data,
    2,
    "Second node should should have 2 as data."
  );
  t.equals(
    buildOneTwoThree().next.next.data,
    3,
    "Third node should should have 3 as data."
  );
  t.equals(buildOneTwoThree().next.next.next, null, "last node should be null");
  t.end();
});
