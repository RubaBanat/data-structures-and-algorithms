class Stack {
    constructor() {
      this.arr = [];
    }
  
    peek() {
      return this.arr[this.arr.length - 1];
    }
  
    push(val) {
      this.arr.push(val);
    }
  
    pop() {
      this.arr.pop();
    }
  }
  

class PseudoQueue{
    constructor(){
        this.stack1 = new Stack;
        this.stack2 = new Stack;
        this.length = 0;
        
    }

    enqueue(val){
        this.stack1.push(val)
        this.length ++;
    }
    dequeue(){
        if(this.stack1.arr.length == 0 ){
            console.log('Exception');
            return 'Exception'
        }
        while (this.stack1.arr.length > 0) {
            this.stack2.arr.push(this.stack1.arr.pop());
        }
        this.length--;
        return this.stack2.arr.pop()
    }
    peek(){
        if(this.stack1.arr.length == 0 && this.stack2.arr.length ==0){
            console.log('Exception');
            return 'Exception'
        } else if(this.stack1.arr.length > 0){
            console.log('first stack',this.stack1.arr[0]);
            return this.stack1.arr[0]
        }
        console.log('second stack',this.stack2.arr[this.stack2.arr.length-1]);
        return this.stack2.arr[this.stack2.arr.length-1]
    }

}

const queue = new PseudoQueue()

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
queue.dequeue();
// queue.dequeue();
queue.enqueue(5);
queue.peek();

console.log(queue);

module.exports = PseudoQueue;