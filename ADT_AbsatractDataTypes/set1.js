class Stack {
  constructor () {
    this.items = []
    this.count = 0
  }
  // Add element to top of Stack
  push (element) {
    this.items[this.count] = element
    this.count++
    console.log(`${element} added to ${this.count}`)
    return this.count - 1
  }
  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop () {
    if (this.count == 0) return undefined
    let deleteItem = this.items[this.count - 1]
    this.count -=1
    console.log(`${deleteItem} removed`)
    return deleteItem
  }
}

const stack = new Stack()
stack.push(100)//100 added to 1
stack.push(200)//200 added to 2
console.log(stack.push(300))//

stack.pop()//300 removed
stack.pop()//200 removed
console.log(stack.pop())