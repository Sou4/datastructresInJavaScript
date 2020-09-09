class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(key, value) {
    let newNode = new Node(key, value);

    if(this.head === null) {
      this.head = newNode;
    } else {
      let currNode = this.head;

      while(currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }

    this.size++;
  }

  get(key) {
    if (this.head.next === null) {
      return this.head.value;
    } else {
      let currNode = this.head;

      while (key !== currNode.key) {
        currNode = currNode.next;
      }

      return currNode.value;
    }
  }
}

class HashTable {

  constructor() {
    this.array = [];
    this.keys = [];
  }

  getHashCode(value) {
    return `${value}`.charCodeAt(0);
  }

  getKeys() {
    return this.keys;
  }

  put(key, value) {
    if (this.keys.indexOf(key) !== -1) return;
    this.keys.push(key);

    let hashedKey = this.getHashCode(key);
    
    if (this.array[hashedKey]) {
      let oldLinkedList = this.array[hashedKey];
      oldLinkedList.add(key, value);
      this.array[hashedKey] = oldLinkedList;
    } else {
      let newLinkedList = new LinkedList();
      newLinkedList.add(key, value);
      this.array[hashedKey] = newLinkedList;
    }
    
  }

  get(key) {
    let hashedKey = this.getHashCode(key);

    if (!this.array[hashedKey]) return;

    let list = this.array[hashedKey];
    console.log(list);
    return list.get(key);
  }

  getEntries() {
    let keys = this.getKeys();
    const res = [];
    for (let key of keys) {
      res.push({
        key: key,
        value: this.get(key)
      });
    }
    return res;
  }

  printAll() {
    let keys = this.getKeys();
    for (let key of keys) {
      console.log(`${key} -> ${this.get(key)}`);
    }
  }
}

let hashTable = new HashTable();
hashTable.put('one', 'test');
hashTable.put('on', 'test2');
console.log(hashTable.get('one'));
// hashTable.printAll();
// for (let map of hashTable.getEntries()) {
//   console.log(map.key , map.value)
// }