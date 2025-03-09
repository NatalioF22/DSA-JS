"use strict"

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    print(){
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }

    }

    pop(){
        if(this.size === 0){
            console.log("The list is empty");
            return;

        }
        this.head = this.head.next;
        this.size--;
    }

    insert(data, index){
        if(index<0 || index > this.size + 1){
            console.log(`invalid Index. Please select an index of the value of 0 to ${this.size} using Index based 0.`);
            return;
        }
        if(index === 0){
            this.append(data);
        }

        else{
            const newNode = new Node(data);
            let currentNode = this.head;
            let counter = 0;
            while(counter < index-1){
                currentNode = currentNode.next;
                counter ++;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.size++;
        }
    }

    removeLast(){
        if(this.size===0){
            console.log("This list is empty");
            return;
        }
        else{
            let currentNode = this.head;
            while(currentNode.next.next != null){
                currentNode = currentNode.next;
            }
            currentNode.next = null;
            this.size --;
        }
    }


    addLast(data){
        const newNode = new Node(data);
        if(this.size === 0){
            this.append(data);
        }
        else{
            let currentNode = this.head;
            while(currentNode.next != null){
                currentNode = currentNode.next;
            }
            newNode.next = null;
            currentNode.next = newNode;
            this.size++;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid Index");
            return;
        }
        if (index === 0) {
            this.pop()
        } else {
            let counter = 0;
            let currentNode = this.head;
            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter++;
            }
            currentNode.next = currentNode.next.next;
            this.size--;

        }
    }

    removeNode(data){
        if(this.size ===0){
            console.log("Empty List");
            return;
        }
        if(this.head.data === data){
            this.head = this.head.next;
            this.size--;
            return
        }
        let currentNode = this.head;
        let previousNode = null;
        while(currentNode !== null && currentNode.data !== data){
            previousNode = currentNode;
            currentNode = currentNode.next;

        }
        if(currentNode === null){
            console.log(`There isn't any nodes with the value ${data}`)
            return
        }
        previousNode.next = currentNode.next;
        this.size--;
    }

    reverseList() {
        if (this.size === 0) {
            console.log("The list is empty!");  // Fixed typo
            return;
        }

        let previous = null;
        let currentNode = this.head;

        while(currentNode !== null){
            let nextNode = currentNode.next;
            currentNode.next = previous;
            previous = currentNode;
            currentNode = nextNode;
        }

        this.head = previous;  // Update head to new first node
        return this.head;  // Return new head for chaining
    }

}

let linkedList = new SinglyLinkedList();
linkedList.addLast(30)
linkedList.append(20)
linkedList.append(10)
linkedList.print()

console.log("==========================================")


function printNodes(head){
    while(head!== null){
        console.log(head.data);
        head = head.next;
    }
}
let reversedList = linkedList.reverseList();
printNodes(reversedList)

