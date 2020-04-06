class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!(this.adjacencyList[vertex]))
        this.adjacencyList[vertex] = []
    }
    addEdge(vertex1,vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            this.removeEdge(vertex, this.adjacencyList[vertex].pop())
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(nb => {
                if(!visited[nb]) {
                    return dfs(nb)
                }
            })
        })(start)

        return result
    }
    depthFirstIterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        
        let currentVertex 
        visited[start] = true
        while(stack.length) {
            console.log(stack)
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach( nb => {
                if(!visited[nb]) {
                    visited[nb] = true
                    stack.push(nb)
                }
            })
        }
        return result
    }
    breathFirst(start) {
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        
        visited[start] = true
        while(queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach( nb => {
                if(!visited[nb]) {
                    visited[nb] = true
                    queue.push(nb)
                }
            })
        }
        return result
    }
}


const g = new Graph

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.breathFirst('A'))

