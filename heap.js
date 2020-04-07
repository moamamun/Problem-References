class MaxHeap {
    constructor() {
    this.values = []
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.values[parentIdx]
            if(element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
}

let heap = new MaxHeap()
heap.insert(55)
heap.insert(1)
heap.insert(45)
heap.insert(33)
heap.insert(41)




console.log(heap)

// [41.39,33,18,27,12]