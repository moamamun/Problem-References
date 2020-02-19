class Queue {
    constructor(){
        this.items = []
    }
    process(data) {
        this.items.push(data)
    }
    gone() {
        this.items.shift()
    }
    front() {
        return this.items[0]
    }
    printQueue() { 
    let str = ""; 
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " "; 
        }
    return str; 
    }
}

const line = new Queue
line.process(1)
line.process(11)
line.process(111)
line.process(2)
line.process(22)
line.gone()

console.log(line.printQueue)
