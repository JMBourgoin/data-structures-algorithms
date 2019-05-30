// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if(this.tail !== null){
            this.tail.next = newNode;
        }
        if(this.length === 0){
            this.head = newNode;
        }
        this.tail = newNode;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.length === 0) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        let node = this.head;
        let oldTail;

        for(let i = 1; i < this.length; i++){
            if(i === this.length -1){
                oldTail = node.next;
                node.next = null;
                this.tail = node;
            } else {
                node = node.next;
            }
        }
        this.length -= 1;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let oldHead = this.head;
        let newHead = new Node(val);
        if(this.length === 0){
            this.tail = newHead;
            this.head = newHead;
            this.length += 1;
            return this;
        } else {
            this.head = newHead;
            this.head.next = oldHead;
            this.length += 1;
            return this;
        }
    }

    // TODO: Implement the removeHead method here
    removeHead() {
    
    let oldHead = this.head;
        if(this.length === 0) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return oldHead;
        }

        let newHead = this.head.next;
        this.head = newHead;
        this.length -= 1;
        return oldHead;

    }

    // TODO: Implement the contains method here
    contains(target) {
        if(this.length === 0) return false;
        let node = this.head;
        for(let i = 1; i <= this.length; i++){
            if(node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index >= this.length) return null;
        let node = this.head;
        for(let i = 0; i <= this.length; i++){
            if(i === index) return node;
            node = node.next;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        if(this.length <= index) return false;
        let node = this.head;
        for(let i = 0; i < this.length; i++){
            if(i === index){
                node.value = val;
                return true;
            }
            node = node.next;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(index >= this.length) return false;
        let node = this.head;
        let parent = this.head;
        for(let i = 0; i < this.length; i++){
            if(i === index - 1){
                parent = node;
                node = node.next;
            } else if(i === index){
               let newNode = new Node(val);
                parent.next = newNode;
                newNode.next = node;
                this.length += 1;
                return true;
            } else {
                node = node.next;
            }
        }
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index >= this.length) return undefined;
        let node = this.head;
        let parent = this.head;
        for(let i = 0; i < this.length; i++){
            if(i === index - 1){
                parent = node;
                node = node.next;
            } else if(i === index){
                if(node === this.head) this.head = node.next;
                if(node === this.tail) this.tail = parent;
                parent.next = node.next;
                this.length -= 1;
                return node;
            }
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
