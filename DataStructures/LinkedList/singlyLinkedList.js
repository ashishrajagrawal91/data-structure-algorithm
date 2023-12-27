class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
	}

	insertAtHead(data) {
		let newNode = new Node(data);

		newNode.next = this.head;
		this.head = newNode;
	}

	insertAtTail(data) {
		let newNode = new Node(data);

		this.tail.next = newNode;
		this.tail = newNode;
	}

	insertAtPosition(index, data) {
		if (index === 1) {
			this.insertAtHead(data);
			return;
		}

		let newNode = new Node(data);
		let currentNode = this.head;
		let counter = 1;

		while (counter < index - 1) {
			currentNode = currentNode.next;
			counter++;
		}

		if (currentNode.next === null) {
			this.insertAtTail(data);
			return;
		}

		newNode.next = currentNode.next;
		currentNode.next = newNode;
	}

	delete(position) {
		if (position === 1) {
			let temp = this.head;

			this.head = this.head.next;
			temp.next = null;
			return;
		}

		let currentNode = this.head;
		let counter = 1;

		while (counter < position - 1) {
			currentNode = currentNode.next;
			counter++;
		}

		let temp = currentNode.next;

		currentNode.next = currentNode.next.next;
		temp.next = null;
		if (currentNode.next === null) {
			this.tail = currentNode;
		}
	}

	print() {
		let current = this.head;
		let values = [];

		while (current) {
			values.push(current.value);
			current = current.next;
		}
		console.log(values.join(` `));
	}

	printHeadAndTail() {
		console.log(this.head.value);
		console.log(this.tail.value);
	}
}

let llInstance = new LinkedList(10);

/*
 * Insert element in start
 * llInstance.print();
 * llInstance.insertAtHead(20);
 * llInstance.print();
 * llInstance.insertAtHead(30);
 * llInstance.print();
 */

// Insert element at end
llInstance.print();
llInstance.insertAtTail(20);
llInstance.print();
llInstance.insertAtTail(30);
llInstance.print();

// Insert element at a position
llInstance.insertAtPosition(3, 25);
llInstance.print();

// Insert element at a position 1
llInstance.insertAtPosition(1, 5);
llInstance.print();

// Insert element at a last position
llInstance.insertAtPosition(6, 35);
llInstance.print();

// Delete some middle element
llInstance.delete(4);
llInstance.print();
llInstance.printHeadAndTail();

// Delete first element
llInstance.delete(1);
llInstance.print();
llInstance.printHeadAndTail();

// Delete last element
llInstance.delete(4);
llInstance.print();
llInstance.printHeadAndTail();
