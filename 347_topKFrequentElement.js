class Node {
	constructor(val, frequency) {
		this.value = val;
		this.frequency = frequency;
		this.next = null;
	}
}

class PriorityQueue {
	constructor() {
		this.first = null;
	}
	
	insert(value, frequency) {
		const newNode = new Node(value, frequency);
		if (!this.first || frequency > this.first.frequency) {
			newNode.next = this.first;
			this.first = newNode;
		} else {
			let pointer = this.first;
			while (pointer.next && frequency < pointer.next.frequency) {
				pointer = pointer.next;
			}
			newNode.next = pointer.next;
			pointer.next = newNode;
		}
	}
}

var topKFrequent = function(nums, k) {
	let frequencies = new Map()
	let priorityQ = new PriorityQueue()
	let result = []
	for (let i = 0; i < nums.length; i++){
		if (!frequencies.has(nums[i])){
			frequencies.set(nums[i], 0)
		}
		let counter = frequencies.get(nums[i]) +1
		frequencies.set(nums[i], counter)
	}
	
	for (let [key, value] of frequencies.entries()) {
		priorityQ.insert(key, value)
	}

	let traversalCounter = 0
	let currentNode = priorityQ.first
	while(traversalCounter < k){
		result.push(currentNode.value)
		traversalCounter++
		currentNode = currentNode.next
	}
	return result
};