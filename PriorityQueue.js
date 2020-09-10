class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.size = 0;
    this.array = [];
  }


  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    if (this.array.length === 0) {
      this.array.unshift(newNode);
    } else {
      if (newNode.priority > this.array[0].priority) {
        this.array.push(newNode);
      } else {
        this.array.unshift(newNode);
      }
    }
    this.size++;
  }

  dequeue() {
    this.size--;
    return this.array.shift();
  }

  printAll() {
    this.array.forEach(e => console.log(e));
  }
}

let pQ = new PriorityQueue();
pQ.enqueue(213,3);
pQ.enqueue(123,1);
pQ.printAll();

console.log(pQ.dequeue().value);
pQ.printAll();