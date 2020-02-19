class Stack{
    constructor() {
        this.item = []
    }
    push(data) {
        this.item.push(data)
    }
    pop() {
        if(this.item.length === 0) {
            return "noshit"
        }
        return this.item.pop()
    }
    printStack() 
{ 
    let str = ""; 
    for (var i = 0; i < this.item.length; i++) 
        str += this.item[i] + " "; 
    return str; 
} 
}

const book = new Stack()
book.push('monday')
book.push('tuesday')
book.push('wednesday')

console.log(book.printStack()
)